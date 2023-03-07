import React from 'react'
import styles from '@/styles/quiz.module.css'

const Quiz = () => {
  return (
    <main className={styles.body}>
    <div className={styles.mars}>
      <div className={styles.mars_border}></div>
      <div className={styles.mars_menu}></div>
      <div className={styles.mars_bg}>
        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mars_sunburst.png' />
          {/* <!-- 빙글빙글 은은한 태양 뒷배경 --> */}
      </div>
      <div className={styles.mars_logo}>
        <div className={styles.mars_logo__empty}></div>
        <div className={styles.mars_logo__filled}></div>
      </div>
      <input className={styles.radio} checked='checked' id='index1' name='trigger' type='radio' />
        <input className={styles.radio} id='index2' name='trigger' type='radio' />
          <input className={styles.radio} id='index3' name='trigger' type='radio' />
            <input className={styles.radio} id='index4' name='trigger' type='radio' />
              <input className={styles.radio} id='index5' name='trigger' type='radio' />
                <input className={styles.radio} id='index6' name='trigger' type='radio' />
                  <div className={styles.mars_truck}>
                    <div class='mars_truck__wheel'>
                      <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/truckwheel.png' />
                      {/* <!-- 트럭 휠 --> */}
                    </div>
                    <div class='mars_truck__wheel--two'>
                      <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/truckwheel.png' />
                      {/* <!-- 트럭 휠 --> */}
                    </div>
                    <div class='mars_truck__body'>
                      <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/truckbody.png' />
                      {/* <!-- 트럭 몸통 --> */}
                    </div>
                  </div>
                  <div className={styles.mars_buildings}></div>
                  <div className={styles.mars_parallax}></div>
                  <div className={styles.mars_parallax__two}></div>

                  {/* <!-- 1 --> */}

                  <div className={`${styles.mars_scene} ${styles.start}`}>
                    <div className={styles.mars_scene__inner}>
                      <div className={styles.intro}>
                        <div className={styles.intro_small}>
                          Move
                        </div>
                        <div className={styles.intro_to}>
                          to
                        </div>
                        <div className={styles.intro_large}>
                          <span>M</span>
                          <span>a</span>
                          <span>r</span>
                          <span>s</span>
                        </div>
                        <div className={styles.intro_subheading}>
                          " Your new home awaits"
                        </div>
                        <label for='index2'>
                          Get started
                          <img className={styles.rocket} src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/rocket_copy.png' />
                          {/* <!-- 로켓 --> */}
                            <img className={styles.cloud} src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/rcloud.png' />
                            {/* <!-- 로켓발사 방귀--> */}
                            </label>
                          </div>
                      </div>
                    </div>

                    {/* <!-- 2 --> */}

                    <div className={`${styles.mars_scene} ${styles.development}`}>
                      <div className={styles.mars_scene__inner}>
                        <div className={styles.intro_development}>
                          <div className={styles.intro_development__small}>
                            Choose a
                          </div>
                          <div className={styles.intro_development__large}>
                            <span>D</span>
                            <span>e</span>
                            <span>v</span>
                            <span>e</span>
                            <span>l</span>
                            <span>o</span>
                            <span>p</span>
                            <span>m</span>
                            <span>e</span>
                            <span>n</span>
                            <span>t</span>
                          </div>
                          <div className={styles.intro_development__mars}>
                            <label for='index3'>
                              <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mars_big.png' />
                              {/* <!-- 첫 화면에 있는 큰 화성--> */}
                            </label>
                          </div>
                        </div>
                        <div className={styles.intro_peeps}>
                          <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/peeps.png' />
                          {/* <!--화성에 놀러간 4사람들--> */}
                        </div>
                      </div>
                    </div>

                    {/* <!-- 3 --> */}

                    <div className={`${styles.mars_scene} ${styles.people}`}>
                      <div className={styles.mars_scene__inner}>
                        <div className={styles.intro_people}>
                          <div className={styles.wrap}>
                            <div className={styles.intro_people__small}>
                              How many
                            </div>
                            <div className={styles.intro_people__large}>
                              <span>P</span>
                              <span>e</span>
                              <span>o</span>
                              <span>p</span>
                              <span>l</span>
                              <span>e</span>
                            </div>
                          </div>
                          <label for='index4'>Solo</label>
                          <label for='index4'>Couple</label>
                          <label for='index4'>Family</label>
                          <div className={styles.intro_people__select}>
                            <img className={styles.fam1} src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/fam1.png' />
                            {/* <!-- 아빠--> */}
                              <img className={styles.fam2} src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/fam2.png' />
                              {/* <!-- 아빠 엄마--> */}
                                <img className={styles.fam3} src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/fam3.png' />
                                {/* <!-- 아빠 엄마 아가--> */}
                                  <img className={styles.fam4} src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/fam4.png' />
                                  {/* <!-- 가방 --> */}
                                  </div>
                                </div>
                              </div>
                          </div>

                          {/* <!-- 4 --> */}

                          <div className={`${styles.mars_scene} ${styles.hab}`}>
                            <div className={styles.mars_scene__inner}>
                              <div className={styles.intro_hab}>
                                <div className={styles.intro_hab__small}>
                                  choose a
                                </div>
                                <div className={styles.intro_hab__large}>
                                  <span>L</span>
                                  <span>a</span>
                                  <span>u</span>
                                  <span>n</span>
                                  <span>c</span>
                                  <span>h</span>
                                  <span></span>
                                  <span>d</span>
                                  <span>a</span>
                                  <span>t</span>
                                  <span>e</span>
                                </div>
                                <div className={styles.intro_hab__habs}>
                                  <label for='index5'>January</label>
                                  <label for='index5'>Febraury</label>
                                  <label for='index5'>March</label>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* <!-- 5 --> */}

                          <div className={`${styles.mars_scene} ${styles.hab}`}>
                            <div className={styles.mars_scene__inner}>
                              <div className={styles.intro_hab}>
                                <div className={styles.intro_hab__small}>
                                  Booking complete
                                </div>
                                <div className={styles.intro_hab__large}>
                                  <span>T</span>
                                  <span>h</span>
                                  <span>a</span>
                                  <span>n</span>
                                  <span>k</span>
                                  <span>s</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={`${styles.mars_scene} ${styles.end}`}>
                            <div className={styles.mars_scene__inner}>
                              <div className={styles.intro_slots}>
                                <div className={styles.intro_slots__small}>
                                  thanks
                                </div>
                                <div className={styles.intro_slots__large}>
                                  <span>w</span>
                                  <span>e</span>
                                  <span>w</span>
                                  <span>t</span>
                                </div>
                                <div className={styles.intro_slots_slot}>
                                  <label for='index6'></label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mars_sidebar}>
                            <h2>Cost</h2>
                            <p>Development: -</p>
                            <p>People: -</p>
                            <p>Hab type: -</p>
                            <p>Booking slot: -</p>
                          </div>
                        </div>
                        </main>
                        )
}

                        export default Quiz