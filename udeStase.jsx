import React, { useState } from "react";

const Compteur = () => {
  // Déclare une variable d'état appelée "compte" et une fonction "setCompte" pour la mettre à jour
  const [compte, setCompte] = useState(0);

  return (
    <div>
      <p>Vous avez cliqué {compte} fois</p>
      <button onClick={() => setCompte(compte + 1)}>Cliquez ici</button>
    </div>
  );
};

export default Compteur;
