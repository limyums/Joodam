'use client';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { Anju, Appetizer, Hotpot, Meal, Dessert } from '@/app/menuscript';
import Image from 'next/image';

const BASE_CLASS = 'food';
export default function Page() {
  const foodmenuRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      '.food',
      {
        opacity: 0.3,
      },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.food',
        },
      }
    );
  });

  const renderSpicy = (num: number) => {
    const images = [];
    for (let i = 0; i < num; i++) {
      images.push(
        <Image src="/assets/spicy.png" alt="spicy" width={16} height={16} />
      );
    }
    return images;
  };
  const renderRice = (num: number) => {
    const images = [];
    for (let i = 0; i < num; i++) {
      images.push(
        <Image src="/assets/rice.png" alt="spicy" width={20} height={20} />
      );
    }
    return images;
  };
  const renderPrice = (option: string | string[], price: number | number[]) => {
    const render = [];
    if (option.length != 0) {
      for (let i = 0; i < option.length; i++) {
        render.push(
          <>
            <div className="option">{option[i]}</div>
          </>
        );
      }
    } else {
      render.push(
        <>
          <div>{option}</div>
          <div>${price}</div>
        </>
      );
    }
    return render;
  };
  return (
    <>
      <div ref={foodmenuRef} className={BASE_CLASS}>
        <div id="appetizer" className={`${BASE_CLASS}-item`}>
          <div className={`${BASE_CLASS}-item-title`}>
            <Image src="/assets/line.png" alt="line" width={300} height={20} />
            <div>Appetizer</div>
            <Image src="/assets/line.png" alt="line" width={300} height={20} />
          </div>
          <div className={`${BASE_CLASS}-item-wrap`}>
            <Image
              src="/assets/Appetizer.jpg"
              alt="line"
              width={400}
              height={400}
              className="foodmenuimage"
            />
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {Appetizer.map((item) => (
                <div
                  key={`appetizer-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail`}
                >
                  <div className="title-price">
                    <div className="title">
                      <div>{item.title}</div>
                      <div>
                        {item.gf ? (
                          <Image
                            src="/assets/gf.png"
                            alt="line"
                            width={35}
                            height={17}
                          />
                        ) : (
                          <></>
                        )}
                        {item.ve ? (
                          <Image
                            src="/assets/ve.png"
                            alt="line"
                            width={35}
                            height={17}
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div>${item.price}</div>
                  </div>
                  <div className="tite-ko">{item.title_ko}</div>
                  <div className="description">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="anju" className={`${BASE_CLASS}-item`}>
          <div className={`${BASE_CLASS}-item-title`}>
            <Image src="/assets/line.png" alt="line" width={300} height={20} />
            <div>Anju</div>
            <Image src="/assets/line.png" alt="line" width={300} height={20} />
          </div>
          <div className={`${BASE_CLASS}-item-wrap`}>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {Anju.map((item) => (
                <>
                  <div
                    key={`anju-${item.id}`}
                    className={`${BASE_CLASS}-item-menuitems-detail`}
                  >
                    <div className="title-price">
                      <div className="title">
                        <div>{item.title}</div>
                        <div>
                          {item.gf ? (
                            <Image
                              src="/assets/gf.png"
                              alt="line"
                              width={40}
                              height={20}
                            />
                          ) : (
                            <></>
                          )}
                          {item.ve ? (
                            <Image
                              src="/assets/ve.png"
                              alt="line"
                              width={40}
                              height={20}
                            />
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                      <div>${item.price}</div>
                    </div>
                    <div className="spicy">
                      <div className="tite-ko">{item.title_ko}</div>
                      {renderSpicy(item.spicy)}
                    </div>
                    <div className="description">{item.description}</div>
                  </div>
                </>
              ))}
            </div>
            <Image
              src="/assets/Anju.jpg"
              alt="line"
              width={400}
              height={400}
              className="foodmenuimage"
            />
          </div>
        </div>
        <div id="hotpot" className={`${BASE_CLASS}-item`}>
          <div className={`${BASE_CLASS}-item-title`}>
            <Image src="/assets/line.png" alt="line" width={300} height={20} />
            <div>Hotpot</div>
            <Image src="/assets/line.png" alt="line" width={300} height={20} />
          </div>
          <div className={`${BASE_CLASS}-item-wrap`}>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {Hotpot.map((item) => (
                <>
                  <div
                    key={`hotpot-${item.id}`}
                    className={`${BASE_CLASS}-item-menuitems-detail`}
                  >
                    <div className="title-price">
                      <div className="title">
                        <div>{item.title}</div>
                        <div>
                          {item.gf ? (
                            <Image
                              src="/assets/gf.png"
                              alt="line"
                              width={35}
                              height={17}
                            />
                          ) : (
                            <></>
                          )}
                          {item.ve ? (
                            <Image
                              src="/assets/ve.png"
                              alt="line"
                              width={35}
                              height={17}
                            />
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                      {item.option ? (
                        <></>
                      ) : (
                        renderPrice(item.option, item.price)
                      )}
                    </div>
                    {item.option ? renderPrice(item.option, item.price) : <></>}
                    <div className="spicy">
                      <div className="tite-ko">{item.title_ko}</div>
                      {renderSpicy(item.spicy)}
                    </div>
                    <div className="description">{item.description}</div>
                    {renderRice(item.rice)}
                  </div>
                </>
              ))}
            </div>
            <Image
              src="/assets/Hotpot.jpg"
              alt="line"
              width={400}
              height={400}
              className="foodmenuimage"
            />
          </div>
        </div>
        <div id="meal" className={`${BASE_CLASS}-item`}>
          <div className={`${BASE_CLASS}-item-title`}>
            <Image src="/assets/line.png" alt="line" width={300} height={20} />
            <div>Meal</div>
            <Image src="/assets/line.png" alt="line" width={300} height={20} />
          </div>
          <div className={`${BASE_CLASS}-item-wrap`}>
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {Meal.map((item) => (
                <>
                  <div
                    key={`meal-${item.id}`}
                    className={`${BASE_CLASS}-item-menuitems-detail`}
                  >
                    <div className="title-price">
                      <div className="title">
                        <div>{item.title}</div>
                        <div>
                          {item.gf ? (
                            <Image
                              src="/assets/gf.png"
                              alt="line"
                              width={35}
                              height={17}
                            />
                          ) : (
                            <></>
                          )}
                          {item.ve ? (
                            <Image
                              src="/assets/ve.png"
                              alt="line"
                              width={35}
                              height={17}
                            />
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                      {item.option ? (
                        <></>
                      ) : (
                        renderPrice(item.option, item.price)
                      )}
                    </div>
                    {item.option ? renderPrice(item.option, item.price) : <></>}
                    <div className="spicy">
                      <div className="tite-ko">{item.title_ko}</div>
                      {renderSpicy(item.spicy)}
                    </div>
                    <div className="description">{item.description}</div>
                    {renderRice(item.rice)}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div id="dessert" className={`${BASE_CLASS}-item`}>
          <div className={`${BASE_CLASS}-item-title`}>
            <Image src="/assets/line.png" alt="line" width={300} height={20} />
            <div>Dessert</div>
            <Image src="/assets/line.png" alt="line" width={300} height={20} />
          </div>
          <div className={`${BASE_CLASS}-item-wrap`}>
            <Image
              src="/assets/Dessert.jpg"
              alt="line"
              width={400}
              height={400}
              className="foodmenuimage"
            />
            <div className={`${BASE_CLASS}-item-menuitems`}>
              {Dessert.map((item) => (
                <div
                  key={`dessert-${item.id}`}
                  className={`${BASE_CLASS}-item-menuitems-detail`}
                >
                  <div className="title-price">
                    <div>{item.title}</div>
                    <div>${item.price}</div>
                  </div>
                  <div className="tite-ko">{item.title_ko}</div>
                  <div className="description">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
