import "./BioReferences.css";

const choregraphes = [
  { name: "Christine Bastin", url: "https://cbastin.com/" },
  { name: "Suzy Block", url: "https://www.youtube.com/@0101shr/videos/" },
  {
    name: "Joëlle Bouvier",
    url: "https://numeridanse.com/profil/bouvier-joelle/",
  },
  { name: "Orin Camus", url: "https://compagnie-yma.com/a-propos" },
  { name: "Hafiz Dahou & Aicha M’Barek", url: "https://chatha.org/" },
  { name: "Hugo Dayot", url: "https://www.collectifaao.fr/compagnie" },
  { name: "Paco décina", url: "https://pacodecina.com/" },
  { name: "Etienne Decroux", url: "https://mimecorporel.com/etienne-decroux/" },
  {
    name: "Françoise Dupuy",
    url: "https://numeridanse.com/profil/dupuy-francoise/",
  },
  {
    name: "Dominique Dupuy",
    url: "https://numeridanse.com/profil/dupuy-dominique/",
  },
  { name: "Mitia Fedotenko", url: "https://www.autremina.net/" },
  {
    name: "Sylvie Giron",
    url: "https://www.kelemenis.fr/fr/artistes-compagnies/646/sylvie-giron",
  },
  { name: "Chloé Hernandez", url: "https://compagnie-yma.com/a-propos" },
  { name: "Gianni Joseph", url: "https://www.ciegiannijoseph.com/" },
  {
    name: "Philippe Jamet",
    url: "https://www.theatredunord.fr/lecole/les-promos/promo-6/les-intervenants-6/philippe-jamet",
  },
  { name: "Régis Obadia", url: "https://www.regisobadia.com/" },
  {
    name: "Valérie Rivière",
    url: "https://www.opera-bordeaux.com/valerie-riviere-1451",
  },
  {
    name: "Françoise Tartinville",
    url: "https://www.atmen.org/fran%C3%A7oise-tartinville-1",
  },
  { name: "Carole Vergne", url: "https://www.collectifaao.fr/compagnie" },
  { name: "Marc Vincent", url: "https://gmem.org/marc-vincent-floy-krouchi" },
];

const compagnies = [
  { name: "Atmen", url: "https://www.atmen.org/fran%C3%A7oise-tartinville-1" },
  { name: "Collectif AR", url: "https://www.collectifar.com/collectif-ar" },
  {
    name: "Compagnie Sauf le Dimanche",
    url: "https://saufledimanche.com/la-compagnie/",
  },
  { name: "Compagnie Tangible", url: "https://tangible-et-cie.org/" },
  { name: "Didier Théron", url: "https://www.didiertheron.com/" },
];

const artistes = [
  {
    name: "Michel Abdoul",
    url: "https://cbastin.com/christine-et-cie/la-compagnie/interpretes/michel-abdoul/",
  },
  { name: "Chloé Belloc", url: "http://chloebelloc.com/" },
  { name: "Yann Bertrand", url: null },
  { name: "Diana Lui", url: "https://dianalui.fr/" },
  { name: "Jeff Mills", url: null },
  { name: "Nefeli Papadimouli", url: "https://www.nefelipapadimouli.com/" },
  {
    name: "Julie Plus",
    url: "https://www.doitinparis.com/fr/interview-julie-plus-wipplay-21593",
  },
  { name: "Maria Ponti", url: "http://www.mariaponti.com/" },
  { name: "Alexandre Roccoli", url: "https://www.alexandreroccoli.com/" },
  { name: "Blandine Soulage", url: "https://blandinesoulage.com/" },
];

function LinkItem({ name, url }) {
  return (
    <li>
      {url ? (
        <a
          href={url}
          className="highlight-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      ) : (
        <span className="no-link">{name}</span>
      )}
    </li>
  );
}

export default function BioReferences() {
  return (
    <div className="bio-references">
      <h3>- Collaborations artistiques -</h3>

      <div className="bio-columns">
        <div className="column">
          <h4>Chorégraphes</h4>
          <ul>
            {choregraphes.map((item) => (
              <LinkItem key={item.name} {...item} />
            ))}
          </ul>
        </div>

        <div className="column">
          <h4>Compagnies / Collectifs</h4>
          <ul>
            {compagnies.map((item) => (
              <LinkItem key={item.name} {...item} />
            ))}
          </ul>

          <div className="column2">
            <h4>Artistes pluridisciplinaires</h4>
            <ul>
              {artistes.map((item) => (
                <LinkItem key={item.name} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
