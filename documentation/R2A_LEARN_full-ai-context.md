# R2A LEARN Full AI Context

## Identita

Ready2Agent Learn e un laboratorio open-source per imparare a costruire sistemi Next.js AI-native con agenti di coding.

## Scopo

- formazione
- divulgazione
- onboarding di sviluppatori e agenti
- dimostrazione del metodo

## Cosa contiene

- landing pubblica
- documentazione ordinata
- workflow didattico
- prompt sequenziali
- caso studio Auth/IAM
- skeleton architetturale

## Cosa non contiene

- runtime enterprise completo
- dashboard privata pronta
- moduli business completi
- codice cliente

## Struttura cartelle

- `src/app/`
- `src/components/landing/`
- `src/components/ui/`
- `src/server/` (skeleton)
- `src/shared/` (skeleton)
- `documentation/`
- `workflow/`
- `prompts/`

## Regole per agenti

- leggere sempre README e questo documento
- lavorare solo nello scope richiesto
- non introdurre feature fuori requisito
- eseguire quality gate
- aggiornare documentazione quando cambia il comportamento

## Caso studio

Auth/IAM didattico con setup iniziale, login/logout, sessioni, ruoli, permessi, profili, dashboard shell, policy server-side e validazione.

## Quality gate

- `npm run lint`
- `npm run build`
- `npm run typecheck`

## Vincoli di modifica

- niente codice enterprise riutilizzabile direttamente in produzione
- niente riferimenti a repository privato come source di clone pubblico
- mantenere linguaggio coerente con identita Learn

## Source-of-truth hierarchy

1. `README.md`
2. `documentation/R2A_LEARN_full-ai-context.md`
3. requisito master del workflow
4. prompt corrente
5. codice
