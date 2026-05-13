# Chaotic Idea to Requirement

## Input confuso

"Vorrei una dashboard clienti moderna con analytics, automazioni e AI, possibilmente subito."

## Prompt debole

```text
Trasforma questa idea in un requisito.
```

## Output mediocre

- obiettivo ampio e non verificabile
- scope non delimitato
- assenza di out-of-scope

## Prompt migliorato (Ready2Agent)

```text
Agisci come requirement analyst agent-native.

Prendi questa idea confusa e trasformala in requisito operativo:
<incolla qui l'idea>

Output richiesto:
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

## Output buono/eccellente

- requisito leggibile da umano e agente
- criteri misurabili
- confini chiari per evitare scope creep

## Perche migliora

- separa desiderio da requirement
- rende verificabile il lavoro
- prepara il passaggio ai prompt 00-06

## Checklist validazione

- scope e out-of-scope separati
- criteri misurabili
- assunzioni evidenziate
- rischi con mitigazioni

## Collegamenti utili

- First Mission: `documentation/first-mission/README.md`
- Prompt consigliato: `prompts/01-requirement-analysis.md`
- Next step: `exercises/level-01-foundations/01-vague-idea-to-requirement.md`
