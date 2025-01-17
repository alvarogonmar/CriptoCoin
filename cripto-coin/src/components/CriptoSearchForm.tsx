export default function CriptoSearchForm() {
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Currency: </label>
        <select name="currency" id="currency">
          <option value="">-- Select --</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="cryptocurrency">Cryptocurrency: </label>
        <select name="cryptocurrency" id="cryptocurrency">
          <option value="">-- Select --</option>
        </select>
      </div>

      <input type="submit" value="Check Crypto" />
    </form>
  );
}
