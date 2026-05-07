"use client";

import { useSyncExternalStore } from "react";
import { WIKI_READ_STORAGE_KEY } from "@/content/wiki";

type ReadState = Record<string, boolean>;

const STORE_EVENT = "r2a-wiki-read-change";
const EMPTY_STATE: ReadState = Object.freeze({});

let cachedSerialized: string | null = null;
let cachedState: ReadState = EMPTY_STATE;

function readFromStorage(): ReadState {
  if (typeof window === "undefined") return EMPTY_STATE;
  const raw = window.localStorage.getItem(WIKI_READ_STORAGE_KEY);

  if (raw === cachedSerialized) {
    return cachedState;
  }

  if (!raw) {
    cachedSerialized = null;
    cachedState = EMPTY_STATE;
    return cachedState;
  }

  try {
    const parsed = JSON.parse(raw) as ReadState;
    cachedSerialized = raw;
    cachedState = parsed;
    return cachedState;
  } catch {
    cachedSerialized = null;
    cachedState = EMPTY_STATE;
    return cachedState;
  }
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};

  const onStorage = (event: StorageEvent) => {
    if (event.key === WIKI_READ_STORAGE_KEY) onStoreChange();
  };

  const onCustom = () => onStoreChange();

  window.addEventListener("storage", onStorage);
  window.addEventListener(STORE_EVENT, onCustom);

  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(STORE_EVENT, onCustom);
  };
}

function getSnapshot() {
  return readFromStorage();
}

function getServerSnapshot() {
  return EMPTY_STATE;
}

export function useWikiReadState() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setRead = (path: string) => {
    if (typeof window === "undefined") return;
    const current = readFromStorage();
    if (current[path]) return;
    const updated = { ...current, [path]: true };
    const serialized = JSON.stringify(updated);
    cachedState = updated;
    cachedSerialized = serialized;
    window.localStorage.setItem(WIKI_READ_STORAGE_KEY, serialized);
    window.dispatchEvent(new Event(STORE_EVENT));
  };

  return { state, setRead };
}
