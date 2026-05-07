# Feature to Codex Plan

## Quando usarlo

Quando hai una feature e vuoi un piano di esecuzione adatto a Codex/OpenCode.

## Cosa ottieni

Task breakdown ordinato, dipendenze, quality gate e ordine di implementazione.

## Input richiesti

- descrizione feature
- file/cartelle coinvolte
- vincoli tecnici
- quality gate richiesti

## Prompt pronto da copiare

```text
Agisci come technical lead per coding agent.

Feature: <...>
Contesto repository: <...>
File coinvolti: <...>
Vincoli: <...>
Quality gate: lint, build, typecheck, check struttura

Genera un piano operativo per Codex/OpenCode con:
1) Analisi requisito sintetica.
2) Task breakdown incrementale (task piccoli, ordine chiaro).
3) Dipendenze tra task.
4) Rischi per task.
5) Definizione di done per ogni task.
6) Sequenza comandi di validazione finale.

Vincoli:
- Non introdurre backend o dipendenze fuori scope.
- Nessun task monolitico.
- Priorita prima sicurezza/coerenza, poi estetica.
```

## Output atteso

Piano esecutivo riusabile in sessione di implementazione.

## Come valutare il risultato

- i task sono piccoli e ordinati?
- ci sono dipendenze implicite non dichiarate?
- la DoD evita ambiguita?

## Variante avanzata

Chiedi due piani:

- piano conservativo (rischio basso)
- piano veloce (time-to-first-result)

Confronta impatti.

## Prossimo step consigliato

Usa `prompts/04-implementation-start.md` sul primo task del piano.
