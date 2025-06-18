export default function ReviewForm() {
  return (
    <>
      <h3>La tua Recesione</h3>
      <form>
        <div className="py-2">
          <label htmlFor="name" className="py-2">
            Nome Utente
          </label>
          <input
            className="form-control"
            id="name"
            type="text"
            placeholder="Inserisci il tuo nome"
          />
        </div>

        <div className="py-2">
          <label htmlFor="review" className="pb-2">
            Recensione
          </label>
          <textarea
            id="review"
            className="form-control"
            placeholder="Inserisci qui la tua recensione..."
          ></textarea>
        </div>

        <div className="py-2">
          <label htmlFor="vote">Voto</label>
          <input type="number" id="vote" max="10" min="0" className="mx-2" />
        </div>
      </form>
    </>
  );
}
