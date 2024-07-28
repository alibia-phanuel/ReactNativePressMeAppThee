import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // Importation de Yup pour la validation

const FormulaireInscription = () => {
  // Valeurs initiales du formulaire
  const valeursInitiales = { email: "", motDePasse: "" };

  // Schéma de validation avec Yup
  const schemaValidation = Yup.object({
    email: Yup.string()
      .email("Adresse email invalide")
      .required("Champ obligatoire"),
    motDePasse: Yup.string()
      .min(6, "Le mot de passe doit contenir au moins 6 caractères")
      .required("Champ obligatoire"),
  });

  // Fonction de soumission du formulaire
  const envoiFormulaire = (valeurs, { setSubmitting }) => {
    // Simuler une soumission de formulaire
    setTimeout(() => {
      console.log(valeurs); // Afficher les valeurs du formulaire dans la console
      setSubmitting(false); // Arrêter l'indicateur de soumission
    }, 400);
  };

  return (
    <Formik
      initialValues={valeursInitiales} // Initialisation des valeurs du formulaire
      validationSchema={schemaValidation} // Ajout du schéma de validation
      onSubmit={envoiFormulaire} // Gestionnaire de soumission
    >
      {({ isSubmitting }) => (
        <Form>
          {/* Champ de saisie pour l'email */}
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />{" "}
            {/* Utilisation du composant Field de Formik pour lier le champ à l'état du formulaire */}
            <ErrorMessage name="email" component="div" />{" "}
            {/* Affichage des messages d'erreur */}
          </div>
          {/* Champ de saisie pour le mot de passe */}
          <div>
            <label htmlFor="motDePasse">Mot de passe</label>
            <Field type="password" name="motDePasse" />{" "}
            {/* Utilisation du composant Field de Formik */}
            <ErrorMessage name="motDePasse" component="div" />{" "}
            {/* Affichage des messages d'erreur */}
          </div>
          {/* Bouton de soumission */}
          <button type="submit" disabled={isSubmitting}>
            Envoyer
          </button>{" "}
          {/* Désactive le bouton lors de la soumission */}
        </Form>
      )}
    </Formik>
  );
};

export default FormulaireInscription;
