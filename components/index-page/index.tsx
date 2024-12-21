import { Feature, Features } from '@components/features'
import { ArrowRightIcon } from '@components/icons'
import Image from 'next/image'
import { Link } from 'nextra-theme-docs'
import styles from './index.module.css'
import docsCardDark from 'public/assets/card-1.dark.png'
import docsCard from 'public/assets/card-1.png'
import { basePath } from 'utils/config'

export const IndexPage = () => (
    <div className="home-content">
        <div className="content-container">
        <h1 className="headline">
            Build Stream Apps <br className="sm:block hidden" />
            with Python & Kubernetes
        </h1>
        <p className="subtitle">
            Simple, powerful and flexible event stream processing {' '}
            <br className="max-md:hidden" />
            for kubernetes.{' '}
        </p>
        <p className="subtitle">
            <Link className={styles.cta} href='/docs'>
            Get started <span>→</span>
            </Link>
        </p>
        </div>
        <style jsx>{`
      .content-container {
        max-width: 90rem;
        padding-left: max(env(safe-area-inset-left), 1.5rem);
        padding-right: max(env(safe-area-inset-right), 1.5rem);
        margin: 0 auto;
      }
      .features-container {
        margin: 8rem 0 0;
        padding: 4rem 0;
        background-color: #f3f4f6;
        border-bottom: 1px solid #e5e7eb;
      }
      .features-container .content-container {
        margin-top: -8rem;
      }
      :global(.dark) .features-container {
        background-color: #000;
        border-bottom: 1px solid rgb(38, 38, 38);
      }
      .headline {
        display: inline-flex;
        font-size: 3.125rem;
        font-size: min(4.375rem, max(8vw, 2.5rem));
        font-weight: 700;
        font-feature-settings: initial;
        letter-spacing: -0.12rem;
        margin-left: -0.2rem;
        margin-top: 3.4rem;
        line-height: 1.1;
        background-image: linear-gradient(146deg, #000, #757a7d);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      :global(.dark) .headline {
        background-image: linear-gradient(146deg, #fff, #757a7d);
      }
      .subtitle {
        font-size: 1.3rem;
        font-size: min(1.3rem, max(3.5vw, 1.2rem));
        font-feature-settings: initial;
        line-height: 1.6;
      }
      :global(#docs-card) {
        color: #fff;
        text-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
      }
      :global(#docs-card img) {
        object-fit: cover;
        object-position: left;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        height: 100%;
        z-index: 0;
        user-select: none;
        pointer-events: none;
      }
      :global(#docs-card img:nth-child(2)) {
        display: none;
      }
      :global(.dark #docs-card img:nth-child(2)) {
        display: initial;
      }
      :global(.dark #docs-card img:nth-child(1)) {
        display: none;
      }
      :global(#highlighting-card) {
        min-height: 300px;
        background-image: linear-gradient(to top, transparent, #fff 50%),
          url(${basePath}/assets/kafka.svg);
        background-size: 534px;
        background-position: 100px 0px calc(100% + 4px);
        background-repeat: no-repeat;
      }
      :global(.dark #highlighting-card) {
        background-image: linear-gradient(to top, transparent, #202020 50%),
          url(${basePath}/assets/kafka.svg);
      }

      :global(#feature-1-card) {
        min-height: 300px;
        background-image: linear-gradient(to top, transparent, #fff 50%);
        background-size: 904px;
        background-position: center 0px;
        background-repeat: no-repeat;
      }
      :global(.dark #feature-1-card) {
        background-image: linear-gradient(to top, transparent, #202020 50%)
      }

      :global(.feat-darkmode) {
        min-height: 300px;
      }
      :global(.feat-darkmode h3) {
        font-size: 48px;
      }
      :global(#event-sys-card) {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      :global(#event-sys-card p) {
        max-width: 320px;
      }
      :global(#event-sys-card) {
        background-image: url(${basePath}/assets/event-system.svg);
        background-position: -50px -100px;
      }
      :global(.dark #event-sys-card) {
        background-image: url(${basePath}/assets/event-system-dark.svg);
      }        
      :global(#fs-card) {
        min-height: 240px;
      }
      :global(#fs-card h3) {
        text-align: left;
        width: min(300px, 41%);
        min-width: 155px;
      }
      :global(#a11y-card) {
        background-image: url(${basePath}/assets/high-contrast.png);
        background-position: -160px 160px;
      }
      @media screen and (max-width: 1300px) {
        :global(#a11y-card) {
          background-image: linear-gradient(to bottom, white, transparent),
            url(${basePath}/assets/high-contrast.png);
        }
      }
      @media screen and (max-width: 1200px) {
        :global(#highlighting-card) {
          aspect-ratio: auto;
        }
        :global(#feature-1-card) {
          aspect-ratio: auto;
        }          
        :global(.feat-darkmode h3) {
          font-size: 4vw;
          font-size: min(48px, max(4vw, 30px));
        }
        :global(#event-sys-card video) {
          aspect-ratio: 787/623;
          height: auto;
        }
        .headline {
          letter-spacing: -0.08rem;
        }
      }
      @media screen and (max-width: 1024px) {
        :global(#docs-card) {
          aspect-ratio: 135/86;
        }
        :global(#event-sys-card) {
          aspect-ratio: 8/3;
        }
        :global(#event-sys-card h3) {
          text-align: left;
        }
        :global(#highlighting-card) {
          background-size: 136%;
        }
        :global(#feature-1-card) {
          background-size: 136%;
        }          
        :global(#a11y-card) {
          background-image: url(${basePath}/assets/high-contrast.png);
          background-position: center 160px;
        }
      }
      @media screen and (max-width: 768px) {
        :global(#docs-card) {
          min-height: 348px;
          width: 100%;
          aspect-ratio: auto;
        }
        :global(#docs-card img) {
          object-position: -26px 0;
          width: 250%;
          max-width: initial;
        }
      }
      @media screen and (max-width: 640px) {
        :global(#event-sys-card) {
          aspect-ratio: 2.5/2;
          justify-content: flex-start;
          align-items: stretch;
          min-height: 350px;
        }
        :global(#event-sys-card h3) {
          text-align: center;
        }
        :global(#event-sys-card p) {
          max-width: 100%;
        }
        :global(#event-sys-card video) {
          position: relative;
          margin: 0.75em -1.75em 0;
          max-width: calc(100% + 3.5em);
        }
        :global(.dark #event-sys-card video) {
          mix-blend-mode: lighten;
        }
      }
    `}</style>
    <div className="features-container">
      <div className="content-container">
      <Features>
        <Feature
            index={0}
            large
            centered
            id="docs-card"
            href="/docs"
            >
              <Image src={docsCard} alt="Background" loading="eager" />
              <Image src={docsCardDark} alt="Background (Dark)" loading="eager" />
              <h3
                style={{
                  textShadow: '0 2px 4px rgb(0 0 0 / 20%)'
                }}
              >Stream processing<br className="show-on-mobile" />
              <span className="font-light"> using kubernetes resources.</span>
              </h3>
          </Feature>
          <Feature index={1} centered href="/docs">
            <h3>
              Deploy <br className="show-on-mobile" />
              <span className="font-light">10x faster</span>
            </h3>
            <p className="text-left mb-8">
            Build mission-critical real-time applications and services in 
            minutes, not weeks or months.       
            <br />
            </p>
            <h3>
              Govern <br className="show-on-mobile" /><span className="font-light">centrally</span>
            </h3>
            <p className="text-left mb-8">
            Maintain quality and consistency by enforcing standardized patterns and best practices. 
            Streamline consistency for architecture design, deployments, logging, and observability.
            <br />
            </p>   

            <h3>
              Enable <br className="show-on-mobile" /><span className="font-light">teams</span>
            </h3>
            <p className="text-left mb-8">
            Simplify development by eliminating boilerplate code and 
            focus on writing business logic. Use pre-built components 
            or your favorite Python libraries.
            <br />
            </p>                        
          </Feature>
          <Feature
            index={2}
            id="highlighting-card"
            href="/docs"
          >
            <h3>
              Kafka <br className="show-on-mobile" />
              <span className="font-light">is all you need</span>
            </h3>
            <p>
                No separate processing cluster required. Input, output, and state data is stored in Kafka.
            </p>
          </Feature>    
          <Feature
            index={3}
            large
            id="event-sys-card"
            href="/docs"
          >
            <div style={{ zIndex: 2 }}>
              <h3>
                Event-driven systems, <br />
                <span className="font-light">built effortlessly</span>
              </h3>
              <p>
                Compose event-driven systems using Apps and Agents
                that process infinite streams of events.{' '}
              </p>
            </div>
            <div className="absolute size-full inset-0 bg-[linear-gradient(to_right,white_350px,_transparent)] dark:bg-[linear-gradient(to_right,#202020_350px,_transparent)] z-[1]" />
          </Feature> 
          <Feature
            index={4}
            id="feature-1-card"
            href="/docs"
          >
            <h3>
              No DSL or Java required
            </h3>
            <p>
              Simply define Kubernetes custom resources and write in Python when 
              needed—no need for a domain-specific language or Java/Scala code.
            </p>
          </Feature>
          <Feature index={5} href="/docs">
            <h3>
              Stateful as easy 
              as stateless <br className="show-on-mobile" />
            </h3>
            <p className="mb-4">
            Power apps with <span className="font-bold">fault-tolerant</span> local state, which enables very 
            fast and efficient stateful operations like data lookups and aggregations.
            </p>
          </Feature>  

          <Feature
            index={6}
            centered
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: `url(${basePath}/assets/gradient-bg.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#fff'
            }}
            href="/docs"
          >
            <svg 
            width="200px" 
            height="200px" 
            viewBox="0 0 192 192" 
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: 'drop-shadow(0 2px 10px rgba(0, 0, 0, .1))'
            }}            
                fill="none">
                <circle cx="25" cy="96" r="9" fill="#fff" />
                <circle cx="167" cy="96" r="9" fill="#fff" />
                <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"
                    d="M58 96h76m0 0L98 60m36 36-36 36" />
            </svg>
              <h3
                style={{
                  textShadow: '0 2px 4px rgb(0 0 0 / 20%)'
                }}
              >Exactly-once processing, <br className="show-on-mobile" />
              <span className="font-light">by default</span>
              </h3>
          </Feature>                                        
      </Features>
      </div>    
    </div>    
    </div>
)