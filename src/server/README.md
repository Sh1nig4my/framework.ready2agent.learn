# Server Skeleton

Questa area rappresenta il lato server del laboratorio Learn. E volutamente leggera: non contiene implementazioni enterprise pronte, ma indica dove collocare responsabilita durante il caso studio.

## Perche esiste nel metodo Ready2Agent

Separare il server dal resto aiuta umani e agenti a non confondere logica di business, accesso dati e utility tecniche. Questa separazione riduce bug, semplifica review e rende i task piu chiari.

## Sottocartelle principali

- `service/`: logica applicativa
- `repository/`: accesso dati
- `lib/`: utility tecniche condivise server-side

Ogni sottocartella contiene un README didattico dedicato.
