# Lola Peostuudio

Koduleht [lolapeostuudio.ee](https://lolapeostuudio.ee) koopia – peokorraldus ja sündmuste korraldamine.

## Tehnoloogia

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS

## Käivitamine

```bash
npm install
./scripts/download-images.sh   # Laeb pildid ja logo lolapeostuudio.ee lehelt
npm run dev
```

Avage [http://localhost:3000](http://localhost:3000)

### Pildid ja logo

Pildid tuleb kopeerida kodulehelt lolapeostuudio.ee. Käivita:

```bash
./scripts/download-images.sh
```

See laeb kõik pildid (logo, teenuste pildid jms) kausta `public/images/`.

## Lehed

- `/` – Esileht
- `/lastele` – Lastepidude pakkumised
- `/taiskasvanutele` – Täiskasvanute sündmused
- `/ohupallid` – Õhupalliloomad ja dekoratsioonid
- `/fotosessioonid` – Fotosessioonid
- `/koostood` – Koostööpartnerid
- `/meist` – Meie lugu

## Kontakt

- Peoteenused: +372 5860 7141
- Dekoratsioonid: +372 514 1705
