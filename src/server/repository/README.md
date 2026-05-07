# Repository Layer (Skeleton)

## Scopo della cartella

Raccoglie l'accesso ai dati e isola i dettagli di persistenza.

## Perche esiste nel metodo Ready2Agent

Separare repository e servizi evita che la logica applicativa dipenda direttamente da query o storage.

## Cosa andra qui durante il caso studio

- repository utenti
- repository profili
- repository mapping ruoli/permessi

## Esempi concreti

- `users.repository.ts`
- `profiles.repository.ts`

## Cosa non mettere qui

- policy autorizzative
- trasformazioni UI

## Come aiuta un coding agent

Riduce ambiguita: l'agente sa che qui scrive solo accesso dati e non regole di business.
