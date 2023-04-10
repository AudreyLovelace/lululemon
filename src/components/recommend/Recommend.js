import "./Recommend.scss";

export const Recommend = () => {
  return (
    <div className="recommend_products">
      <div className="container">
        <div className="tittle">You may also like</div>
        <div className="cube1 productList">
          <div className="cube2">
            <div className="detail imgContainer">
              <img src="https://images.lululemon.com/is/image/lululemon/LW1EIZS_052868_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" />
              <div className="colorSwatch"></div>
            </div>
            <div className="detail name">
              <p>Tight-Fit Long-Sleeve Knit Bodysuit</p>
            </div>
            <div className="detail price">
              <span className="number">$128</span>
              <span className="currencyCode">CAD</span>
            </div>
          </div>
          <div className="cube2">
            <div className="detail imgContainer">
              <img src="https://images.lululemon.com/is/image/lululemon/LW1DOSS_0002_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" />
              <div className="colorSwatch"></div>
            </div>
            <div className="detail name">
              <p>Hold Tight Tank Top</p>
            </div>
            <div className="detail price">
              <span className="number">$48</span>
              <span className="currencyCode">CAD</span>
            </div>
          </div>
          <div className="cube2">
            <div className="detail imgContainer">
              <img src="https://images.lululemon.com/is/image/lululemon/LW3GEZS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" />
              <div className="colorSwatch"></div>
            </div>
            <div className="detail name">
              <p>All It Takes Ribbed Nulu Long-Sleeve Shirt</p>
            </div>
            <div className="detail price">
              <span className="number">$128</span>
              <span className="currencyCode">CAD</span>
            </div>
          </div>
          <div className="cube2">
            <div className="detail imgContainer">
              <img src="https://images.lululemon.com/is/image/lululemon/LW3GMHS_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" />
              <div className="colorSwatch"></div>
            </div>
            <div className="detail name">
              <p>Mixed Fabric Half-Zip Pullover</p>
            </div>
            <div className="detail price">
              <span className="number">$178</span>
              <span className="currencyCode">CAD</span>
            </div>
          </div>
        </div>
        <div className="cube1 scrollbar">
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
};
