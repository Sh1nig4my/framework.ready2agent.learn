# Chaotic Idea to Requirement

## Quando usarlo

Quando hai un'idea confusa e devi ottenere un requisito utilizzabile.

## Cosa ottieni

Requirement breve con obiettivo, scope, out-of-scope, vincoli, criteri di successo.

## Input richiesti

- idea iniziale in testo libero
- utente target
- problema da risolvere
- risultato atteso
- limiti noti

## Prompt pronto da copiare

```text
Agisci come requirement analyst agent-native.

Prendi questa idea confusa e trasformala in un requisito operativo:
<incolla qui l'idea>

Output richiesto in sezioni:
1) Obiettivo in 1-2 frasi.
2) Scope (cosa facciamo ora).
3) Out-of-scope (cosa NON facciamo ora).
4) Vincoli tecnici e di tempo.
5) Assunzioni da validare.
6) Criteri di completamento verificabili.
7) Rischi principali con mitigazione.

Vincoli:
- Niente soluzione tecnica prematura.
- Niente frasi generiche.
- Ogni criterio deve essere verificabile.
```

## Output atteso

Un requisito leggibile da team umano e coding agent.

## Come valutare il risultato

- scope e out-of-scope sono separati?
- i criteri sono misurabili?
- ci sono assunzioni non validate?

## Variante avanzata

Chiedi una versione "MVP 2 settimane" e una "roadmap 8 settimane" dello stesso requisito.

## Prossimo step consigliato

Vai a `playground/04-business-context-to-agent-prompt.md` per trasformare il requisito in prompt operativo.
