# Service Layer (Skeleton)

## Scopo della cartella

Qui vivono i servizi applicativi: regole, orchestrazione dei flussi e decisioni di dominio.

## Perche esiste nel metodo Ready2Agent

Nel metodo Learn, il service layer evita che la logica finisca dispersa in route o componenti UI.

## Cosa andra qui durante il caso studio

- servizio autenticazione didattico
- servizio gestione utenti/ruoli
- policy checks server-side

## Esempi concreti

- `auth.service.ts`
- `permissions.service.ts`

## Cosa non mettere qui

- query dirette al database (vanno in repository)
- rendering UI

## Come aiuta un coding agent

Dare un confine chiaro al service layer aiuta l'agente a sapere dove implementare regole senza contaminare altri layer.
