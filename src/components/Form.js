import React, { useState } from "react";
import "./form.css";
function Form() {
  const [checked, setChecked] = useState([]);
  const checkList = ["Tofu", "Mantar", "Mısır", "Zeytin", " Kırmızı Biber"];

  return (
    <div className="Form-main">
      <form id="pizza-form">
        <div>
          <label htmlFor="email">
            isim
            <input id="name-input" type="text" />
          </label>
        </div>
        <label for="boyut">
          Boyutu seçin
          <div>
            <select name="boyut" id="boyut">
              <option value="kucuk">Küçük</option>
              <option value="orta">Orta</option>
              <option value="buyuk">Büyük</option>
              <option value="jumbo">Jumbo</option>
            </select>
          </div>
        </label>
        <label for="source">
          Sosunuzu seçiniz
          <div>
            <input type="checkbox" value="BBQ Source" name="source" /> BBQ
            <input type="checkbox" value="Dijon Source" name="source" /> Dijon
            <input type="checkbox" value="Mustard Source" name="source" />{" "}
            Mustard
          </div>
        </label>
        <label>
          Ek Malzeme
          <div className="checkList">
            {checkList.map((item, index) => (
              <div key={index}>
                <input value={item} type="checkbox" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </label>
        <div className="button-submit">
          <button type="submit" id="order-button">
            Sipariş Ekle
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
