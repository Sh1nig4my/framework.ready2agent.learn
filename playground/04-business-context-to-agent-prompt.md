# Business Context to Agent Prompt

## Quando usarlo

Quando il contesto business e chiaro ma il prompt operativo e debole.

## Cosa ottieni

Un prompt robusto con ruolo, input, output, vincoli, controlli.

## Input richiesti

- obiettivo business
- target utente
- KPI o risultato atteso
- vincoli operativi
- rischi principali

## Prompt pronto da copiare

```text
Agisci come orchestratore agent-native per un task software.

Contesto business:
- Obiettivo: <...>
- Target: <...>
- KPI/Risultato: <...>
- Vincoli: <...>
- Rischi: <...>

Produci un prompt pronto per un coding agent con sezioni obbligatorie:
1) Ruolo agente.
2) Task specifico.
3) Input disponibili.
4) Output atteso.
5) Vincoli tecnici e di scope.
6) Quality check obbligatori.
7) Formato output finale richiesto.

Vincoli:
- Niente richieste vaghe (es. "fai meglio").
- Niente obiettivi non verificabili.
- Inserisci anche cosa NON fare.
```

## Output atteso

Prompt operativo completo, pronto da usare in Codex/OpenCode.

## Come valutare il risultato

- sono espliciti confini e non-obiettivi?
- output e quality check sono verificabili?
- il prompt riduce la probabilita di drift?

## Variante avanzata

Genera il prompt in due versioni:

- versione per junior team
- versione per team esperto

## Prossimo step consigliato

Applica il prompt su un esercizio livello 2 in `exercises/level-02-agent-workflow/`.
