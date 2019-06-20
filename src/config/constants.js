import React from "react";
import { ReactComponent as InicioIcon } from "../assets/multiple-users-silhouette.svg";
import { ReactComponent as EditorIcon } from "../assets/open-book.svg";

export const SIDEBAR_PAGES = [
  { title: "Inicio", link: "", icon: <InicioIcon /> },
  { title: "Editor", link: "editor", icon: <EditorIcon /> },
  { title: "Disciplinas", link: "subjects", icon: <><EditorIcon /><InicioIcon /></> }
];

export const THEME_COLORS = {
  LIGHT: "light",
  DARK: "dark"
};

export const DIRECTORY_TYPE = 0;
export const ARCHIVE_TYPE = 1;

export const ACCESS_TOKEN = 'access_token'

export const DEFAULT_IMAGE = 'data:image/png;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEAAQADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiqeqatYaLYvealdxW1uvV5DjJ9AOpPHQc1434s+NF1deZaeHIjbRHg3coBkb/dXov1OTz2NAXPUvEnjHRfCsG/UrsCYjKW8fzSv9F7D3OB714h4s+KuteITJbWbHTdPPHlxN+8cf7T/AJ8DA5wc1w09xNdTvPcTSTTSHc8kjFmY+pJ5NW9K0XUNauPJsLZpSMbm6Kn1PQUSairyegleTsihRXWeIfA1zoOjxXxnWchttwEXAjz0I9RnjPHUVydTSqwqx5oO6HOEoO0kFFFFaEBRRRQAqsyOHVirKcgg8g17d4R8QL4g0ZZHI+1w4Sdffs30P88jtXiFbPhjXZPD+sx3QyYG+SdB/Eh/qOorix2G9vT03Wx04at7KeuzPcZ4IbmFoZ4kliYYZHUEH8DXC678NbefdPo8ot5OpgkJKH6HqO/r+Fd3FLHPCk0Th45FDKynIIPQ0+vnqVepRd4Ox61SlCoveR8+6jpd9pNx5F9bPDJ23DhvcHofwqvb3E1pOk9vNJDNGdySRsVZT6gjpX0HeWVtqFs1vdwRzRN1V1yP/rH3rz7XfhoRvn0WXI6/ZpW/RW/x/Ovaw+ZwnpU0f4HnVcFKOsNUaPhT4z3lnstfEURu4BgC6iAEq/7w6N29D1617JpGt6br1mLvTLyK5hPUoeVPow6g+xr5KurS4sbhre6hkhmXqjrg1Npmrahot6l5pt3LbTr0eNsZHXBHQj2PFemrNXRx6rRn19RXkfhP40W8+y08SxCCToLyFSUP+8vUfUZHsK9XtrmC8tkuLWaOeCQZSSNgysPYjrSGS0UUUAFFFFABRRRQAUUUUAFFFcr4s8f6L4TjZLiX7RfYylpCQX9tx6KPr+ANAHUO6xozuwVFGWZjgAeprzLxb8Y9O0zzLTQVTULoZBnP+pQ+3d/w49zXlvivx/rfiyRkuZvIsc/LaQkhPbd3Y/X8AK5anYVzR1nXtT8QXpu9UvJLmX+HcflQeiqOAPpVO3tp7udYLaF5ZX4VEUkn8K6nw/4B1HVts95mytDg5cfO49l7fU+vevTtI0LTtDt/KsbdUJHzSHl3+p/p0rgxOYU6Xux1Z00cJOpq9EcToPw1J23GtyY7/Zom/wDQmH8h+dehWtpb2NulvawpDCnREXAFTUV4VfE1KzvNnp06MKa91EdxBFdW8lvOgeKRSjqe4PWvCvEWiy6DrEtk+WT78T/30PQ/0PuDXvNc34z8PDXtHPlLm8t8vD/teq/j/MCujAYn2NS0tmZYqj7SF1ujxWigggkEYI6g0V9KeMFFFFABRRRQB6V8OPEW9Doly/zLl7YnuOpX+o/H0FeiV8629xLa3MdxA5SWNg6MOxHSvdfDutRa9o8N7HhX+7Kg/gcdR/UexFeBmWG5Je1js9/U9XB1uaPI90atFFFeUdxR1TR7DWbfyb+2SZR90nhl+h6ivN9e+HN5ZB59Kc3cA58o8SKPbs34c+1erUV00MXVofC9OxjVoQqfEtT5zdGjdkdSrqcFWGCDW14c8Xaz4VufN0y7ZY2OZLd/mik+q+vHUYPvXrGueFtL15CbqHZPjAnj4cfX1/GvMNf8E6poe6UL9qtBz50Q+6P9peo/Ue9e7h8fSraPRnmVsLOnqtUey+E/ixo2vlLW/I02/bgLK37qQ/7L9vocdQBmvQK+Na7Twn8TNb8L7Ldn+3aevH2aZuVH+w3VfpyPau2xz3Ppaiud8MeN9E8WQ/8AEvudtyBl7WbCyr747j3GRXRUhhRRRQAVT1TVrDRbF73UbqO2t06u56n0A6k+w5rjPGXxU0vw2ZbKw23+prlSin93Ef8AbYdSP7o9MHFeE694j1XxLfm81S6eZ/4E6JGPRV6Afz75NOwrnf8Ai/4x3uoeZZ+HleytjkG6b/XOP9n+4P16cjpXlru8sjSSOzuxyzMckn1JptFMQV1fw/utPg8QrFfW8bvMAtvK4z5b9vbnpnrnHqa5SlBKsGUkEHII7VnVp+0g4dyqc+SSl2Po2iue8HeIBr+jK0jf6XBiOcep7N+P8wa6GvkqlOVOThLdHvQkpxUkFFFFQUFFFFAHlHxD8O/YL8arbJi2uW/egfwSf4Hr9c+1cRX0JqNhBqmnz2Vyu6KZdp9vQj3B5rwjVtMn0fU57G4HzxNjI6MOxH1FfRZdifaQ9nLdfkeTjKPJLmWzKVFFFekcQUUUUAFdJ4M8QnQdYAlbFncYSbP8Po34fyJrm6KipTjUg4S2ZcJuElJH0cCCAQcg96K4j4eeIvt9h/ZVy+bm2X92T/HH/iOn0x7129fJ1qUqM3CXQ92nUVSKkgooorIsKKKKAOS8QeAtO1bdPaAWd2cnKD5HP+0vb6j1715hrGg6joU/l31uVUnCSryj/Q/06175Udxbw3UDQXESSxOMMjqCD+Br0MNmFSl7stUclbCQqarRnzxDNLbzJNBI8UqHcjoxDKfUEdK9V8I/GW7syln4jRrqDhVu4x+8T/eHRh054PXrWd4h+Gww1xoje5tZG/8AQWP8j+deeTwTWs7wzxPFKhwyOuCPwr3aOIp11eDPMqUp0naSPrvTdTstXskvNPuo7m3f7rxnI+h9D7HmrdfJegeJdV8M3wutLu2hYkb4zykg9GXoe/uO2K948FfFDTfFDR2V2q2OqEYEbN8kp/2D6/7J59M1tYhM+caKKKZIUUUUAFFFFAGv4a1yTQNZiu1yYj8kyD+JD1/EdR9K90hmjuII5oXDxSKGRl6EHoa+dK9J+G/iLcp0S5fkZe2J9OrL/Ufj7V5OZ4bnj7WO639DvwVblfI9mei0UUV4J6gUUUUAFcd4/wDDv9q6Z9vt0zd2ikkAcvH1I/DqPx9a7GitaNWVKanHoRUgpxcWfONFdV458OnRdWM9vHiyuiWTHRG7r/Ue30NcrX1dKpGrBTjszwpwcJOLCiiitCAooooAtadfz6XqEF7bNtlhbcPQ+oPsRxXu+k6nBrGmQX1ufklXOD1U9wfoa+fq7HwB4i/srU/sFw+LS7YAEnhJOgP49D+HpXnZjhvaw547r8jswlbklyvZnrtFFFfOHrhRRRQAUVi614q0nQjsu7gtPjIgiG5/8B+JFZVr8SNBuZxG4urcH+OaMbf/AB0k1vHDVpR5oxdjN1qcXZvU6+snW/Duna/DsvIf3gGEmTh0+h9PY8VpxSxzxJLDIskbjKuhyCPUGn1lGUoSvF2ZbipKz2PEPEnhO+8OzbpB51oxwlwg4+jDsf59u9YIJBBBII6EV9Cahare6dc2rAETRMmD7ivnojBwa+jwGKlXg+bdHj4qgqUly7M6rwFpttq2s3drdoHiazf6g7lGR7jNYer6XPo2qT2NwPnibhuzL2I+orqPhf8A8jJc/wDXo3/oaV1Hj7w7/a2l/brdM3lopOAOXj6kfh1H4+tZzxXssXyS2di40OehzLdHkNFFFemcQUUUUAFSW88trcR3EDlJY2Dow6gjpUdFJq4z3nw7rUWvaNDephXPyyoP4HHUf1HsRWrXivgvxD/YOsgTNizucJN/s+jfhn8ia9qBBGQcg18xjcN7CpZbPY9rDVvawu90FFFFcZ0BRRRQBna5pEOuaTNYzYG8ZR8fccdD/ntmvCby0msLya0uEKTRMVZfevoeuB+I3hz7TbDWbVP3sI23AUfeTs31H8vpXqZbifZz9nLZ/mcWMo80edbo8vooor6A8kKKKKACiiigD2TwN4i/tvSRBcPm9tQFfPV17N/Q+/1rqq8C0PV5tD1aG+hydhw6ZxvQ9R/nvivdrO7hv7OG7t3DwyqGVvY183mGG9jU5o7M9jCVvaRs90T1l+I9UbRtAu75BmSNMJkZ+YkAfqa1Kw/GFhLqPhW+t4Bul2h1UdTtIYj64BrkoqLqRUtro6Kjag2tzxCaaS4meaZ2eR2LMzHJJPemUUV9ceAd98NNblj1CTSJXLQSqXhB/hcckD2Iyfw969QryL4bafJc+JDeAERWsZLN/tMCoH5ZP4V67XzmZqKrvl+fqevg23S1Cvnm/TytRuY/7srr+RNfQ1eBeIE8vxHqaDoLuXH/AH0a6MofvSRlj17sWdV8Ll/4nN63pb4/8eH+Fep15f8ACwf8TLUD6QqP1r1CubMv94fyNsH/AAUeN+OfDv8AYurfaIExZXRLJgcI3df6j2+lcrXvuu6RDrmkzWM2BuGY3x9xx0P+e2a8Iu7SaxvJbW4QpNExR1PqK9XL8T7anyy3Rw4uj7Od1syGiiivQOQKKKKACvWfh74i/tHTzply+bm1X5Cf44+g/EdPpj3ryarem6hPpWowX1s2JYW3D0I7g+xHFc2Lw6r03Hr0NqFV0p36H0HRVTS9Rg1bTYL62OY5Vzg9VPcH3B4q3XyrTi7M9xNNXQUUUUhhTXRZEZHUMjDDKRkEelOooA8P8W+H28P6y8Sq32WXLwMf7vdc+o6fke9YNe6eKNBTxBo0lthRcJ88Dns3p9D0/wD1V4dLE8MrxSoUkRirKRggjqK+mwOJ9tTs91ueLiqPs56bMZRRRXccwUUUUAFd98OfEX2e5OjXT/upjutyx4V+6/j/AD+tcDTkdo3V0Yq6nKsDgg1jXoxrU3CRpSqOnJSR9GUVg+EvEC+INGSZiouovknUf3uzfQ9fzHat6vlKkJU5OMt0e7GSlFSRxWvfDuz1O4e6sZ/sczkl027kY+oHb/PFY9p8Lbkyj7ZqMSxg8iFSxI/HGP1r02iumGPxEY8qkYywtKTu0UtK0qz0awSzsotkS8knkse5J7mrtFFckpOTu9zdJJWQV4P4oGPFOqD/AKeXP617xXhvjBNni7Uh/wBNc/mAa9TKX+8kvI4sf8C9TpvhWP8AS9SPpGg/U16ZXmnwr/4+dT/3I/5tXpdYZj/vMvl+Rrg/4KCvP/iP4d8+Aa1bJ+8iAW4VR95ezfh0Pt9K9ApskaSxtHIoZHBVlIyCD1Fc9CtKjUU0a1aaqQcWfOdFbnirQH8P6y8ADG2k+eBz3X0z6jp+R71h19XCcZxUo7M8KUXFuLCiiirJCiiigDtPh94i/s3Uv7NuHAtbpvlJ/gk6D8D0/L3r1qvnHpXtHgrxD/bujhJnze22Emz1Ydm/HHPuDXiZnhrP20fmengq1/3b+R01FFFeMegFFFFABXmfxH8O+VINbtUARyFuQB0boG/HoffHrXplRXNvFd20ttOgeKVSjqe4NdGGruhUU0ZVqSqQcWfO1FaniDRpdB1iaykyyj5onx99D0P9PqDWXX1UZKcVKOzPDlFxdmFFFFUSFFFFAG14X15/D+sx3OSbd/knQd19fqOv6d69xilSaJJYnDxuoZWU5BB6GvnSvTPhx4i82M6Jcv8AOgLWzE9V6lfw6j2z6V5OZ4bmj7WO639DvwVblfs31PQqKKK8E9QKKKKACvE/HS7fGeoD3Q/nGte2V4r49/5HS/8A+2f/AKLWvUyn+M/T9UcWO/hr1N/4V/8AHzqf+5H/ADavS680+Ff/AB86n/uR/wA2r0uscx/3mXy/I0wf8FBRRRXCdJheK9ATxBozwqq/aovngc9m9M+h6fke1eIOjRyNG6lXUkMpGCCO1fRleX/Ebw79nuBrVsn7qY7bhQPuv2b8f5/WvXyzE8svYy2exwY2jde0RwNFFFe6eWFFFFABWp4f1mXQdYhvY8so+WVB/Gh6j+o9wKy6KmUVOLjLZlRk4u6Pom2uIru2iuIHDxSqHRh3BqWvNfhv4i2OdEuX+VsvbE9j1K/j1H4+or0qvlMTQdCo4M9yjVVSCkgooorA1CiiigDmvGvh3+3dHLQpm9tsvDj+Id1/HH5gV4sRg4PWvo6vJviF4d/s7URqdsmLW6b5wP4JOp/A9frn2r2csxNn7GXyPPxtG/7xfM4qiiivbPMCiiigAqW2uZbO6iuYHKSxMHRh2IqKik1fRj2PevD+sxa9o8N7HgMfllQH7jjqP6/QitSvFvBXiI6FrASZ8WVzhJs/wns34d/Yn2r2kHIyOlfMY3DewqWWz2Paw9b2sL9QooorjOgK8W8ff8jnffSP/wBFrXtNeL+P/wDkcr3/AHY//QFr08q/jP0/VHFjv4a9Ta+FjYv9RX1iQ/kT/jXp1eV/C5sa3er622fyYf416pWeZL/aH8i8H/BQUUUVwHUFQXlpDf2c1pcIHhlUqy+xqeimm07oGr6HgWuaRPoerTWM4J2HKPjh0PRh/nrms6vY/HXh3+2tJ+026ZvbUFkwOXTuv9R7/WvHK+oweIVenfqtzw8RR9lO3QKKKK6zAKKKKAHxSyQTJNE5SRGDKw6gjoa9z8M67Hr+jRXQwJl+SdB/C46/geo+teE10HhDxA2gayryMfsk+I519B2b6j+WfWuHH4b21O63R1YWt7Odnsz26ikVgyhlIKkZBB4Ipa+ZPZCiiigAqrqWnwarp09lcrmKZdp9QexHuDzVqimm07oTSasz591TTZ9I1KexuBiSJsZHRh2I9iOap1658QPDv9qab/aNuhN3aKdwH8cfUj6jqPxryOvqcJiFXpqXXqeJXpOlO3QKKKK6jAKKKKACvWfh74i/tHTv7MuXzdWq/IT/ABx9B+I6fTHvXk1W9N1CfStRgvrZsSwtuHoR3B9iOK5sXh1XpuPXobUKrpTv0PoOiqel6jBq2mQX1uf3cy5weqnuD7g5FXK+VacXZnuJpq6CvF/H/wDyOV7/ALsf/oC17RXi/j//AJHK9/3Y/wD0Ba9LKv479P1Rx47+GvU0Phf/AMjHc/8AXo3/AKGlesV5P8MP+Rkuf+vNv/Q0r1iozP8A3h+iKwX8IKKKK886wooooAK8f8feHf7I1X7bbx4s7skjA4jfuvtnqPx9K9gqjrGlQazpc9jcD5ZF4bHKN2I+hrqwmIdCpzdOphiKPtYW6nz/AEVYv7KfTb6azuU2zQsVYf1HsetV6+pTTV0eI1bRhRRRTEFFFFAHqnw68RfbLM6Pcv8Av7dcwk/xx+n1H8voa7qvnmwvp9Nv4by2fbNC25T/AEPsele8aPqkGs6XBfW5+WReV7q3cH6Gvnsyw3s5+0js/wAz1sHW548j3ReooorzDtCiiigArxnxv4dOh6uZYExZXJLRY6I3df8AD2Psa9mrN17R4dd0iaxmwCwzG+M7HHQ/57E114PEuhUu9nuYYij7WFup4HRU13azWV3La3CFJomKOp7EVDX1CaaujxGrBRRRTEFFFFAHZfD/AMRf2XqR064fFpdsNpPRJOgP49D+FeuV8417N4I8Rf25pAinfN7bALJnq69m/wAfce4rxMzw1v30fn/melgq3/Lt/I6ivF/H/wDyOV7/ALsf/oC17RXi3j//AJHO9+kf/oC1jlX8Z+n6o0x38NepofDAgeJrgeto3/oaV6zXj/w3kCeKwufvwOv8j/SvYKnNF+/+SKwX8IKKKK846wooooAKKKKAOE+Ivh37XZjWLZP39uuJwBy8fr+H8vpXllfRrKGUqwBUjBBHBFeJeL/D7aBrLRop+yTZeBvbuv1H8sete7lmJ5l7GXTY8zG0bP2i+Zz9FFFeueeFFFFABXX+AfEX9k6p9iuHxZ3bAZJ4STs349D+HpXIUVnVpRqwcJdS6c3CSkj6OorlfAviL+2tJ+z3Dg3tqAr5PLr2b+h9/rXVV8nVpypTcJbo92E1OKkgooorMsKKKKAPP/iN4c8+Aa1ap+8iAW4VR95ezfh0Ptj0rzGvoySNJY2jkUMjAqykZBB7V4f4r0B/D+svAoY2snzwOe6+mfUdPyPevdyzE80fYy3Wx5eNo2ftF1MOiiivXOAKKKKACtLQdYm0LV4b6LJCnEiA43oeo/z3ArNoqZRUk4y2Y4txd0fRFpdQ3tpFdW7h4ZVDow7g1454+/5HO++kf/ota2/hx4i8ic6LdPiOUlrdmP3W7r+PUe+fWsLx4c+NNQx28sf+Q1ryMHQdDFSg+2n3o9DEVVUoKXmP8AHHjOyHqJB/441e0V4d4MnFv4v01yeDIU/76Ur/AFr3GsM2X75Py/VmuAf7t+oUUUV5Z2hRRRQAUUUUAFY3ifQo9f0aS1OBOvzwOf4XH9D0/GtmiqhNwkpR3RMoqSsz50likgmeGVCkiMVZWHII6imV6H8R/DvlyDW7ZBsYhLkDsegb8eh/D1NeeV9Xh6yrU1NHh1abpzcWFFFFbmQUUUUAaOh6vPoerQ30JJ2HDpn76HqD/nrivdrO7hv7OG7t3DwyqHRvY188V3/w58RfZ7g6Lcv+6lJa3Yn7r91/Hr9frXl5lhvaQ9pHdfkduDrcsuR7M9Pooor589YKKKKACsPxVoCeINGeABRcx/PA57N6Z9D0/I9q3KKuE5QkpR3RMoqScWfOckbxSNHIpV0JVlIwQR1FNr0H4j+HfJmGtWqfu5CFuFUdG7N+PQ++PWvPq+rw9aNampo8KrTdObiwooorYzCiiigB0cjxSLJGxV0IZWBwQR0NWtU1CXVdRlvZwBLLt346ZCgf0qnRS5Ve/Ud3axNZ3LWd7b3SDLwyLIPqDn+le66Lrtjr1n9os5MkY8yNuGQ+hH9eleJ6zouoaBqL2Gp2zwTrzhujDsynoRx1FQ2N/d6bdLc2c7wzL0ZD+h9R7GuPGYNYhb2aOjD4h0n5H0LRXCeHviNbXmy21cLbTHgTr/q2+v8Ad/l9K7pWV0DowZWGQQcgivnq1CpRlyzR61OrGorxYtFFFYmgUUUUAFFFFAEVzbxXdtLbzoHilUo6nuDXhXiDRpdB1iaykyVHzROR99D0P9PqDXvVcz428O/27o5eFM3ttl4sdWHdfxxx7ge9d+AxPsanLLZnLiqPtIXW6PF6KOlFfSnjBRRRQAU5HeKRZEYq6kMrA4II702igD3Lwpr6eINGSdmX7VH8k6Ds3rj0PX8x2rcrw3wpr7+H9ZScljbSfJOg7r6/UdfzHevcI3SWNZI2DIwDKwOQQe9fMY7DewqabPY9rDVvaQ13Q6iiiuI6QooooAhuraG9tZba4QPFKpR1PcGvCte0abQtXmsZclVO6NyMb0PQ/wCe4Ne91zHjbw7/AG5pBkgTN7bAvFjq47r+Pb3Hua78vxPsanLLZnLiqPtIXW6PGKKKK+lPGCiiigAoorrPB/gDVvF1wrxRtbacDiS8kX5fcKP4j9OB3IoA+jNa0HTPENibPVLSO4iP3dwwyH1U9QfpXh/jD4R6nonmXmj79RsByUA/fRj3A+8PcflxmvoKipLsfGvSt3QfFup6AypDJ5trnm3kOV/D+6fp+te8+LfhnonijfcKn2HUW5+0wrw5/wBtejfXg+9eFeJvBWt+E59uoW2bcnCXUXzRP+PY+xwaU4RqR5ZK6CMpQd4s9P0HxdpmvqEik8m6xzbynDf8BP8AEOvT8hW9XzkrFWDKSGByCOortfD/AMRbyw2waorXluOBID+9X/4r8efevGxOVte9R18j0KONT0qfeesUVS0zV7DWLfz7C5SZe4HDL9R1FXa8iUXF2a1O9NNXQUUUUhhRRRQB5J8QfDv9makNSt0xa3bHcB/BJ1P4Hr+dcZX0FqmnQatps9jcDMcq4yOqnsR7g814PqWnz6VqM9lcriWFtp9COxHsRzX0WXYn2sOSW6/I8jF0eSXMtmVaKKK9I4wooooAK9P+HHiL7RbnRbp/3sQLW5Y/eTuv4dR7fSvMKms7uaxvIbq3cpNEwdW9xXPiaCr03B/I2o1XSnzH0RRWdoerw65pMN9Dgbxh0z9xx1H+e2K0a+VlFxbi90e4mpK6CiiipGFFFYeu+K9M0BCLiXzLnHy28fLH6+g+v4Zq4QlN8sVdkykoq8mcB8QfDv8AZmpDUrdALW6Y7gP4JOp/A9fzrjK3/EHi7UfEBMcrCG0zlbeM8e24/wAR/T2rAr6nDRqRpKNTc8Os4Sm3DYKsWVjdaleR2llbyXFxIcJHGpYmu38IfCrV/ERjur4Np2nHB3yL+8kH+wv9TxzxmvcvD3hbSPC9n9n0u0WMkfvJm+aST/eb+nT0Fb3M7Hnvg34NwWvl33iUrPMMMtkhyi/75/iPsOPrXrEUUcESRRIscaKFVEGAoHQAdhT6KRQUUUUAFRzwQ3UDwXESSwyDa8cihlYehB61JRQB5J4u+DFvdF7zw3ItvKclrOU/u2/3G6r9Dkc9hXjmp6Vf6NevZ6jaS21wvVJFxkeo9R7jivr6s7WdB0vxBZG01SziuYuo3D5lPqrDlT9KdxWPk20vbmwuVuLSd4Zl6Ohwf/1V6HoPxKVtlvrUe1un2mJeD/vL/UflU/iz4N6hpu+60CRr+2GSbd8CZR7dn/DB9jXmMsUkMrxSo0ciEqyOMFSOoI7GsK2Gp11aaNKdadJ+6z6Gt7mC7gWe2mSWJxlXRsg1LXgWk65qOiT+bY3LR5PzIeUf6jof516ToPxEsNQ2waiBZXB43k/umP1/h/Hj3rxMRl1SlrHVfielSxkJ6S0Z2lFIrBlDKQQRkEd6WvOOsK4n4h+Hf7Q08apbJm5tV/eAfxx9T+I6/TPtXbUEAggjINa0asqU1OPQipTVSLiz5xorpPGnh7+wdZPkrizuMvD/ALPqv4Z/Iiubr6ynUjUgpx2Z4M4OEnFhRRRVkhRRRQB1XgbxF/YurC3nkxZXRCvk8I3Zv6H2+leyV841654F8TR6hozW17MqXFknzPIwG6MdGJPp0P4eteNmeFv++j8z0cFW/wCXcvkdlVXUNSs9KtjcXtwkMY7seT7AdSfpXGa/8SLe232+joLiUcGdx8g+g6t+g+tecX+o3mqXJub24eeU/wATHoPQDoB7CufD5bUqe9U0X4m1bGRhpDVnYeIPiNdXm+30hWtYDwZm/wBY30/u/wA/cVwzu0js7sWZjksTkk1Z07Tb3Vr1LPT7WW5uH+7HGuT9fYe54r2Hwn8F4Ygl34mk81+osoWwo/32HJ+g/M17dKhToxtBWPMnUnUd5M8x8OeENa8VXHl6ZaFogcPcSfLEn1b19hk+1e4+EfhZo3hvy7q7A1DUV582VfkjP+wv5cnJ44x0rt7a2gs7dLe1gjggjGEjjUKqj0AHSpa1uTYKKKKQwooooAKKKKACiiigAooooAK5vxP4G0PxXGTf22y6Awt1DhZB9T/EPY59sV0lFAHzd4q+Fuu+HN9xAn9oWC8+dAvzIP8AbTqO/IyPUiuGr7KrifFXww0LxLvnjj/s+/bn7RAowx/206H68H3p3FY8H0PxZqmgkJBN5lsDzby8r+Hp+FemaF440rWdsTP9kujx5Ux4Y/7LdD9OD7V574n8B674VdmvLXzbTPy3cGWjP17r+OPbNczXJiMDSravR9zeliZ09N0fR1FeLaF431XRtsTP9rtRx5Mx5A/2W6j9R7V6VonjDSdcCpFP5Nyf+WE3ytn27N+FeHiMDVo62uu6PSpYmFTTZlrxFosevaNNZOQr/fic/wALjof6H2Jrwq4gltbiS3nQpLGxR1PUEda+iq85+JHh3IGuWycjCXIHp0Vv6H8PeunLMTyS9lLZ7epjjaPNHnW6PN6KKK988oKKKKACiiux8KfDbXfFDJMIvsWntybqdSAR/sL1b9Bx1oGceiNI6oilmY4AAySa9M8J/B3U9VEd1rjNp1oeRDj9+4+h4T8eeOleq+FvAOh+FEV7W3869x813Phn/Dso+n45rqKVx2MvQ/DuleG7P7LpVnHbocb2HLyEd2Y8nqfpnitSiikMKKKKACiiigAooooA/9k='