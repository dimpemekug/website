---
title: "Conversione HEIC e privacy dei metadati"
description: "Come convertire le foto dell'iPhone da HEIC a JPEG e togliere metadati EXIF e coordinate GPS dalle immagini esportate con Resizo."
project: "resizo"
order: 3
section: "Privacy e formati"
---

## Da HEIC a JPEG

Le foto scattate con iPhone e iPad vengono salvate di solito nel formato ad alta efficienza di Apple (**HEIC/HEIF**). Occupa poco spazio, ma spesso non viene accettato da siti web, portali, PC Windows o programmi di grafica meno recenti.

Con Resizo:
1. Trascina nella finestra i file `.heic`, anche decine o centinaia alla volta.
2. Nella sezione **Formato e qualità** scegli **JPEG**.
3. Mantieni la dimensione originale (modalità **Percentuale** al 100%) oppure ridimensiona nello stesso passaggio.
4. Fai clic su **Ridimensiona e Salva**: otterrai file JPEG leggibili da qualsiasi dispositivo.

Le foto scattate in verticale escono con l'orientamento corretto anche quando i metadati vengono rimossi.

---

## Rimozione dei metadati EXIF e GPS

Le foto contengono molte informazioni invisibili ma leggibili da chiunque:
- coordinate geografiche del luogo di scatto (latitudine, longitudine, altitudine);
- marca e modello del telefono o della fotocamera, obiettivo;
- data e ora dello scatto e parametri di esposizione (ISO, tempo, diaframma).

### Opzione "Mantieni metadati"
L'opzione si trova nella sezione **Salvataggio** del pannello delle opzioni ed è **disattivata di default**:
- i file esportati non contengono i metadati EXIF, GPS e il profilo colore dell'originale;
- se ti servono i metadati, per esempio per un archivio fotografico, attiva **Mantieni metadati**: vengono copiati nel nuovo file così come sono.

Il riepilogo della sezione Salvataggio, quando è chiusa, dice sempre se i file usciranno "senza metadati" o "con metadati". Nelle [Impostazioni](/progetti/resizo/docs/impostazioni) › Opzioni iniziali puoi scegliere se l'opzione deve partire attiva.
