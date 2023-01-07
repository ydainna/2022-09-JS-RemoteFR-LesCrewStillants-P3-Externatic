function OfferForm() {
  function handleChange(event) {
    // logique pour la mise en forme
    const label = event.target.parentNode;
    label.classList.add("focused");
  }
  function handleSubmit(event) {
    event.preventDefault();
    // Envoyer les données du formulaire au back
  }

  return (
    <>
      <section className="banner"> image </section>
      <form onSubmit={handleSubmit}>
        <div className="title-offer">
          <label>
            Nom du poste à pourvoir :
            <br />
            <input type="text" name="title" onChange={handleChange} />
          </label>
          <br />
          <label>
            Nom de l'entreprise :
            <br />
            <input type="text" name="title" />
          </label>
          <br />
          <label>
            Adresse :
            <br />
            <input type="text" name="title" />
          </label>
          <br />
          <label>
            Type de contrat :
            <br />
            <select name="filter">
              <option value="option1">--</option>
              <option value="option2">CDI</option>
              <option value="option3">CDD</option>
              <option value="option4">Interim</option>
              <option value="option5">Stage</option>
              <option value="option6">Alternance</option>
            </select>
          </label>
          <br />
          <label>
            Rémunération :
            <br />
            <input type="text" name="title" />
          </label>
          <br />
          <label>
            Horaires :
            <br />
            <textarea name="title" />
          </label>
          <button type="submit" onClick={handleChange}>
            Valider
          </button>
        </div>
        <br />
        <div className="content-offer">
          <label>
            <h2>Description du poste</h2>
            <textarea name="description" />
          </label>
          <br />
          <button type="submit" onClick={handleChange}>
            Valider
          </button>
          <br />
          <label>
            <h2>Description de l'entreprise</h2>
            <textarea name="description" />
          </label>
          <br />
          <button type="submit" onClick={handleChange}>
            Valider
          </button>
          <br />
          <label>
            <h2>Votre mission</h2>
            <textarea name="description" />
          </label>
          <br />
          <button type="submit" onClick={handleChange}>
            Valider
          </button>
          <br />
          <label>
            <h2>Profil et expérience souhaitée</h2>
            <textarea name="description" />
          </label>
          <br />
          <button type="submit" onClick={handleChange}>
            Valider
          </button>
          <br />
          <label>
            <h2>Avantages</h2>
            <textarea name="description" />
          </label>
          <br />
          <button type="submit" onClick={handleChange}>
            Valider
          </button>
          <br />
          <button type="submit" value="Send" onSubmit={handleSubmit}>
            Publier
          </button>
        </div>
      </form>
    </>
  );
}

export default OfferForm;
