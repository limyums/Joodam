'use client';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Anju, Appetizer, Hotpot, Meal, Dessert } from '@/app/menuscript';
import Image from 'next/image';

const BASE_CLASS = 'food';
export default function page() {
  gsap.registerPlugin(ScrollTrigger);
  const appetizerRef = useRef(null);
  const anjuRef = useRef(null);
  const hotpotRef = useRef(null);
  const mealRef = useRef(null);
  const desserRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      '#appetizer',
      {
        opacity: 0.3,
      },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#appetizer',
        },
      }
    );
    gsap.fromTo(
      '#anju',
      {
        opacity: 0.3,
      },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: '#anju',
          start: '0% 50%', //시작 지점
          end: '100% 80%', //끝 지점
        },
      }
    );
    gsap.fromTo(
      '#hotpot',
      {
        opacity: 0.3,
      },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: '#hotpot',
          start: '0% 40%', //시작 지점
          end: '100% 80%', //끝 지점
        },
      }
    );
    gsap.fromTo(
      '#meal',
      {
        opacity: 0.3,
      },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: '#meal',
          start: '0% 40%', //시작 지점
          end: '100% 80%', //끝 지점
        },
      }
    );
    gsap.fromTo(
      '#dessert',
      {
        opacity: 0.3,
      },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: '#dessert',
          start: '0% 40%', //시작 지점
          end: '100% 80%', //끝 지점
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
      <div className={BASE_CLASS}>
        <div ref={appetizerRef} id="appetizer" className={`${BASE_CLASS}-item`}>
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

        <div ref={anjuRef} id="anju" className={`${BASE_CLASS}-item`}>
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
        <div ref={hotpotRef} id="hotpot" className={`${BASE_CLASS}-item`}>
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
        <div ref={mealRef} id="meal" className={`${BASE_CLASS}-item`}>
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
        <div ref={desserRef} id="dessert" className={`${BASE_CLASS}-item`}>
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
