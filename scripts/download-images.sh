#!/bin/bash
# Laeb kõik pildid ja logo lolapeostuudio.ee lehelt alla

BASE_URL="https://www.lolapeostuudio.ee/assets/images"
OUTPUT_DIR="public/images"

mkdir -p "$OUTPUT_DIR"

IMAGES=(
  "logo.png"
  "taustaga-logo.png"
  "index-meta.png"
  "500030144-18061603913145287-42254426651713674-n.jpeg"
  "20251009-183355.jpeg"
  "screenshot-2025-05-22-at-18.42.25.png"
  "436341652-18020718731145287-2859080540695611851-n.jpeg"
  "ohupalliloomad.jpeg"
  "ohupalliloomad1.jpeg"
  "436223841-18021106337145287-5999016831817202194-n.jpg"
  "505164689-18467201836079802-6476343287342823525-n.jpeg"
  "screenshot-2025-06-25-at-13.56.11.png"
  "papagoi.jpeg"
  "papagoi-1.jpeg"
  "papagoi2.jpg"
  "490216001-1207530831378108-8290556476081751762-n.jpg"
  "504496337-18063916124145287-1632313631551243060-n.jpeg"
  "screenshot-2025-06-25-at-16.09.55-1-800x1039.png"
  "img-9660-536x788.jpeg"
  "mulitamine.jpg"
  "mullid.jpeg"
  "499682121-4015204432126877-6484726073120279901-n.jpg"
  "pulm-1.jpeg"
  "pulm-2.jpeg"
  "438087236-7374140662654390-7130794995644942507-n.jpg"
  "448044959-1054326869587599-1692992219498577351-n.jpg"
  "527501387-18068846051145287-6540115258701076660-n.jpeg"
  "589719128-18081795281145287-7412377201853192443-n.jpeg"
  "joulud.jpeg"
  "tatood.jpg"
  "piraadid.jpg"
  "heeliumpallid-1.jpeg"
  "beebipidu.jpeg"
  "koolide-dekoreerimine.jpg"
  "aurodisaini-expert-2.jpeg"
  "riki.jpeg"
  "meist-meta.jpeg"
  "oravaneiu-lola.jpeg"
)

echo "Laen pildid lolapeostuudio.ee lehelt..."
for img in "${IMAGES[@]}"; do
  echo "  - $img"
  curl -s -o "$OUTPUT_DIR/$img" "$BASE_URL/$img"
done

echo "Valmis! Pildid on kaustas $OUTPUT_DIR"
