# Auth/IAM Case Study Tracker

## Stato fasi

| Fase | Livello (A/B/C) | Obiettivo | Stato | Tipo output | Decisioni | Rischio principale | Risk enterprise drift | Quality gate | Prossimi step |
|---|---|---|---|---|---|---|---|---|---|
| Struttura | A | Predisporre skeleton e confini | TODO | Concettuale | - | Scope creep | Medio | - | Definire cartelle target |
| Contratti | A | Definire payload condivisi | TODO | Concettuale | - | Contratti ambigui | Medio | - | Elenco contratti minimi |
| Utenti/Profili | A | Modellazione concettuale | TODO | Concettuale | - | Ruoli sovrapposti | Medio | - | Matrice ruolo/profilo |
| Auth blueprint | A | Disegno flusso auth didattico | TODO | Concettuale | - | Confusione UI/server | Medio | - | Mappa controlli server-side |
| Login/Logout | B | Flussi base tracciati | TODO | Mocked | - | Sessione incoerente | Alto | - | Sequenza task verticali |
| Ruoli/Permessi | B | Enforcement policy | TODO | Mocked | - | Privilegi eccessivi | Alto | - | Validare least privilege |
| Dashboard shell | B | UI didattica area riservata | TODO | Mocked | - | Simulazione troppo enterprise | Alto | - | Limitare a shell mock |
| Quality gate | B | Validazione tecnica/strutturale | TODO | Mocked | - | Gate incompleti | Basso | - | Eseguire quality completo |
| Documentazione | C | Allineamento finale documentazione | TODO | Transfer | - | Drift tra file | Medio | - | Review link e coerenza |

## Decisioni chiave

-

## Rischi aperti

- confusione tra mock didattico e runtime enterprise
- introduzione accidentale di dipendenze auth non in scope
- mancata distinzione tra output concettuale e implementazione mock

## Correzioni applicate

-
