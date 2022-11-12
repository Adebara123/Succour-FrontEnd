import React from 'react'
import styles from './footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import DiscordIcon from '../../assets/discord_white.svg'
import DiscordWhiteIcon from '../../assets/discord_line_white.svg'
import LinkdedInIcon from '../../assets/Linkedin.svg'
import LinkededInWhiteIcon from '../../assets/linkedin_line _white.svg'

const Footer = () => {
     return (
          <div className={styles.footer}>
               <div className={styles.wrapper}>
                    <div className={styles.container}>
                         <div className={styles.footer_menu}>
                    
                          <ul className={styles.footer_social}>

                              <div className={styles.footer_info}>
                              <div className={styles.footer_title}>
                                Stay connected on future releases and events
                              </div>
                              <Link href="/CreateFunding/CreateFunding">
                              <button className={styles.button}>Create funding requests</button>
                                </Link>   
                              </div>
                             
                         

                         <li className={styles.social}>
                         <Link href="#">
                         <div className={styles.social_item}>
                         <Image src={DiscordIcon} alt="Discord" />
                         </div>
                         </Link> 

                         <Link href="#">
                         <div className={styles.social_item}>
                         <Image src={LinkdedInIcon} alt="Discord" />
                         </div>
                         </Link> 
                      </li>

                      <li className={styles.social}>
                         <Link href="#">
                         <div className={styles.social_item}>
                         <Image src={DiscordWhiteIcon} alt="Discord" />
                         </div>
                         </Link> 

                         <Link href="#">
                         <div className={styles.social_item}>
                         <Image src={LinkededInWhiteIcon} alt="Discord" />
                         </div>
                         </Link> 
                      </li>




                       <li className={styles.footer_link}>
                         <div className={styles.title}>Quick Links</div>
                         <div className={styles.links}>
                         <span className={styles.link}>Home</span>
                         <span className={styles.link}>About</span>
                         <span className={styles.link}>DAO</span>
                         <span className={styles.link}>Funding</span>
                         </div>
                      </li>

                    </ul>

                  

                    </div>
                    </div>
               </div>
          </div>
     )
}

export default Footer