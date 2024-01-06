import {
  BubblyWine,
  Cocktail,
  CocktailSoju,
  Coffee,
  DraftBeer,
  FlavouredSoju,
  ImportBeer,
  KoreanBeer,
  LocalBeer,
  Makgeolli,
  Martini,
  NonAlcoholic,
  OldCocktail,
  OriginalSoju,
  OtherSoju,
  PremiumSoju,
  RedWine,
  RoseWine,
  Sake,
  SignatureCocktail,
  Tea,
  Whiskey,
  WhiteWine,
} from '@/app/drinkscript';
import Image from 'next/image';

import { Drink } from '@/types/menu';
import { render } from 'react-dom';

const BASE_CLASS = 'drink';

export default function page() {
  const renderPrice = (item: Drink) => {
    const render = [];
    if (item.option) {
      for (let i = 0; i < item.volume.length; i++) {
        if (i % 2 == 0) {
          render.push(
            <>
              <div className="volumn">{item.volume[i]}</div>
            </>
          );
        } else {
          render.push(
            <>
              <div className="volumn">
                <b>{item.volume[i]}</b>
              </div>
            </>
          );
        }
      }
    } else {
      render.push(
        <>
          <div className="volumn">{item.volume}</div>
          <div>${item.price}</div>
        </>
      );
    }
    return render;
  };
  return (
    <div className={BASE_CLASS}>
      <div id="cocktails" className={`${BASE_CLASS}-item`}>
        <div className={`${BASE_CLASS}-item-title`}>
          <Image src="/assets/line.png" alt="line" width={300} height={20} />
          <div>Cocktails</div>
          <Image src="/assets/line.png" alt="line" width={300} height={20} />
        </div>
        <div className={`${BASE_CLASS}-item-wrap`}>
          <Image
            src="/assets/cocktails.jpg"
            alt="line"
            width={400}
            height={400}
            className="foodmenuimage"
          />
          <div>
            <div className="SubTitle"> Signature</div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {SignatureCocktail.map((item) => (
                <div
                  key={`signaturecocktail-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail`}
                >
                  <div className="title-price">
                    <div className="title">
                      <div>{item.title}</div>
                      <div>
                        {item.virgin ? (
                          <Image
                            src="/assets/virgin.png"
                            alt="line"
                            width={18}
                            height={18}
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div className="price">
                      <div className="volumn">{item.volume}</div>
                      <div>${item.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="SubTitle"> Old Cocktails</div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {OldCocktail.map((item) => (
                <div
                  key={`oldcocktails-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail`}
                >
                  <div className="title-price">
                    <div className="title">
                      <div>{item.title}</div>
                      <div>
                        {item.virgin ? (
                          <Image
                            src="/assets/virgin.png"
                            alt="line"
                            width={18}
                            height={18}
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div className="price">
                      <div className="volumn">{item.volume}</div>
                      <div>${item.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="SubTitle"> Martini </div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {Martini.map((item) => (
                <div
                  key={`martini-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail`}
                >
                  <div className="title-price">
                    <div className="title">
                      <div>{item.title}</div>
                      <div>
                        {item.virgin ? (
                          <Image
                            src="/assets/virgin.png"
                            alt="line"
                            width={18}
                            height={18}
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div className="price">
                      <div className="volumn">{item.volume}</div>
                      <div>${item.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="SubTitle"> Cocktails </div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {Cocktail.map((item) => (
                <div
                  key={`cocktail-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail`}
                >
                  <div className="title-price">
                    <div className="title">
                      <div>{item.title}</div>
                      <div>
                        {item.virgin ? (
                          <Image
                            src="/assets/virgin.png"
                            alt="line"
                            width={18}
                            height={18}
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div className="price">
                      <div className="volumn">{item.volume}</div>
                      <div>${item.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="whiskey" className={`${BASE_CLASS}-item`}>
        <div className={`${BASE_CLASS}-item-title`}>
          <Image src="/assets/line.png" alt="line" width={300} height={20} />
          <div>Whiskey</div>
          <Image src="/assets/line.png" alt="line" width={300} height={20} />
        </div>
        <div className={`${BASE_CLASS}-item-wrap`}>
          <div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {Whiskey.map((item) => (
                <div
                  key={`whiskey-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail`}
                >
                  <div className="title-price">
                    <div className="title">
                      <div>{item.title}</div>
                    </div>
                    <div className="price">{renderPrice(item)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="beer" className={`${BASE_CLASS}-item`}>
        <div className={`${BASE_CLASS}-item-title`}>
          <Image src="/assets/line.png" alt="line" width={300} height={20} />
          <div>Beer</div>
          <Image src="/assets/line.png" alt="line" width={300} height={20} />
        </div>
        <div className={`${BASE_CLASS}-item-wrap`}>
          <div>
            <div className="SubTitle"> Draft Beer</div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {DraftBeer.map((item) => (
                <div
                  key={`draftbeer-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail option`}
                >
                  <div className="title-price">
                    <div className="title">
                      <div>{item.title}</div>
                    </div>
                    <div className="price">{renderPrice(item)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="SubTitle"> Import</div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {ImportBeer.map((item) => (
                <div
                  key={`importbeer-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail`}
                >
                  <div className="title-price">
                    <div className="title">
                      <div>{item.title}</div>
                    </div>
                    <div className="price">{renderPrice(item)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="SubTitle"> Korean Beer </div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {KoreanBeer.map((item) => (
                <div
                  key={`koreanbeer-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail`}
                >
                  <div className="title-price">
                    <div className="title">
                      <div>{item.title}</div>
                    </div>
                    <div className="price">{renderPrice(item)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="SubTitle"> Local Beer </div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {LocalBeer.map((item) => (
                <div
                  key={`localbeer-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail`}
                >
                  <div className="title-price">
                    <div className="title">
                      <div>{item.title}</div>
                    </div>
                    <div className="price">{renderPrice(item)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/assets/beer.jpg"
            alt="line"
            width={400}
            height={400}
            className="foodmenuimage"
          />
        </div>
      </div>
      <div id="korean" className={`${BASE_CLASS}-item`}>
        <div className={`${BASE_CLASS}-item-title`}>
          <Image src="/assets/line.png" alt="line" width={300} height={20} />
          <div>Korean</div>
          <Image src="/assets/line.png" alt="line" width={300} height={20} />
        </div>
        <div className={`${BASE_CLASS}-item-wrap`}>
          <div>
            <div className="SubTitle"> Original Soju</div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {OriginalSoju.map((item) => (
                <div
                  key={`OriginalSoju-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail soju`}
                >
                  <div className="title-price">
                    <div className="title">
                      <div>{item.title}</div>
                    </div>
                    <div className="price">{renderPrice(item)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="SubTitle"> Flavoured Soju</div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {FlavouredSoju.map((item) => (
                <div
                  key={`FlavouredSoju-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail soju`}
                >
                  <div className="title-price">
                    <div className="title">
                      <div>{item.title}</div>
                    </div>
                    <div className="price">{renderPrice(item)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="SubTitle"> Cocktail Soju</div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {CocktailSoju.map((item) => (
                <div
                  key={`CocktailSoju-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail soju`}
                >
                  <div className="title-price">
                    <div className="title">
                      <div>{item.title}</div>
                    </div>
                    <div className="price">{renderPrice(item)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="SubTitle"> Makgeolli</div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {Makgeolli.map((item) => (
                <div
                  key={`Makgeolli-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail soju`}
                >
                  <div className="title-price">
                    <div className="title">
                      <div>{item.title}</div>
                    </div>
                    <div className="price">{renderPrice(item)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="SubTitle"> Premium Soju </div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {PremiumSoju.map((item) => (
                <div
                  key={`PremiumSoju-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail option`}
                >
                  <div className="title-price">
                    <div className="title">
                      <div>{item.title}</div>
                    </div>
                    <div className="price">{renderPrice(item)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="SubTitle"> Others </div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {OtherSoju.map((item) => (
                <div
                  key={`OtherSoju-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail`}
                >
                  <div className="title-price">
                    <div className="title">
                      <div>{item.title}</div>
                    </div>
                    <div className="price">{renderPrice(item)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/assets/korean.jpg"
            alt="line"
            width={400}
            height={400}
            className="foodmenuimage"
          />
        </div>
      </div>
      <div id="wine" className={`${BASE_CLASS}-item`}>
        <div className={`${BASE_CLASS}-item-title`}>
          <Image src="/assets/line.png" alt="line" width={300} height={20} />
          <div>Wine</div>
          <Image src="/assets/line.png" alt="line" width={300} height={20} />
        </div>
        <div className={`${BASE_CLASS}-item-wrap`}>
          <Image
            src="/assets/drink_wine.jpg"
            alt="line"
            width={400}
            height={400}
            className="foodmenuimage"
          />
          <div>
            <div className="SubTitle"> Red wine </div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {RedWine.map((item) => (
                <div
                  key={`RedWine-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail option`}
                >
                  <div className="title-price wine">
                    <div className="title">
                      <div>{item.title}</div>
                    </div>
                    <div className="price">{renderPrice(item)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="SubTitle"> White wine </div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {WhiteWine.map((item) => (
                <div
                  key={`WhiteWine-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail option`}
                >
                  <div className="title-price wine">
                    <div className="title">
                      <div>{item.title}</div>
                    </div>
                    <div className="price">{renderPrice(item)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="SubTitle"> Rose wine </div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {RoseWine.map((item) => (
                <div
                  key={`RoseWine-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail option`}
                >
                  <div className="title-price wine">
                    <div className="title">
                      <div>{item.title}</div>
                    </div>
                    <div className="price">{renderPrice(item)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="SubTitle"> Bubbly wine </div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {BubblyWine.map((item) => (
                <div
                  key={`BubblyWine-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail option`}
                >
                  <div className="title-price wine">
                    <div className="title">
                      <div>{item.title}</div>
                    </div>
                    <div className="price">{renderPrice(item)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="sake" className={`${BASE_CLASS}-item`}>
        <div className={`${BASE_CLASS}-item-title`}>
          <Image src="/assets/line.png" alt="line" width={300} height={20} />
          <div>Sake</div>
          <Image src="/assets/line.png" alt="line" width={300} height={20} />
        </div>
        <div className={`${BASE_CLASS}-item-wrap`}>
          <div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {Sake.map((item) => (
                <div
                  key={`Sake-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail option`}
                >
                  <div className="title-price wine">
                    <div className="title">
                      <div>{item.title}</div>
                    </div>
                    <div className="price">{renderPrice(item)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="nonalcoholic" className={`${BASE_CLASS}-item`}>
        <div className={`${BASE_CLASS}-item-title`}>
          <Image src="/assets/line.png" alt="line" width={300} height={20} />
          <div>Non-Alcoholic</div>
          <Image src="/assets/line.png" alt="line" width={300} height={20} />
        </div>
        <div className={`${BASE_CLASS}-item-wrap`}>
          <div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {NonAlcoholic.map((item) => (
                <div
                  key={`NonAlcoholic-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail soju`}
                >
                  <div className="title-price">
                    <div className="title">
                      <div>{item.title}</div>
                    </div>
                    <div className="price">{renderPrice(item)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="coffeetea" className={`${BASE_CLASS}-item`}>
        <div className={`${BASE_CLASS}-item-title`}>
          <Image src="/assets/line.png" alt="line" width={300} height={20} />
          <div>Coffee & Tea</div>
          <Image src="/assets/line.png" alt="line" width={300} height={20} />
        </div>
        <div className={`${BASE_CLASS}-item-wrap`}>
          <div>
            <div className="SubTitle"> Coffee</div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {Coffee.map((item) => (
                <div
                  key={`Coffee-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail`}
                >
                  <div className="title-price">
                    <div className="title">
                      <div>{item.title}</div>
                    </div>
                    <div className="price">{renderPrice(item)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="SubTitle"> Tea</div>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {Tea.map((item) => (
                <div
                  key={`Tea-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail`}
                >
                  <div className="title-price">
                    <div className="title">
                      <div>{item.title}</div>
                    </div>
                    <div className="price">{renderPrice(item)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
