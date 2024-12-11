import { Feature, Features } from '@components/features'
import { ArrowRightIcon } from '@components/icons'
import Image from 'next/image'
import { Link } from 'nextra-theme-docs'
import styles from './index.module.css'
import docsCardDark from 'public/assets/card-1.dark.png'
import docsCard from 'public/assets/card-1.png'

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
            <Link className={styles.cta} href="/docs">
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
          url(/assets/syntax-highlighting.svg);
        background-size: 634px;
        background-position: -6px calc(100% + 4px);
        background-repeat: no-repeat;
      }
      :global(.dark #highlighting-card) {
        background-image: linear-gradient(to top, transparent, #202020 50%),
          url(/assets/syntax-highlighting.svg);
      }
      :global(.feat-darkmode) {
        min-height: 300px;
      }
      :global(.feat-darkmode h3) {
        font-size: 48px;
      }
      :global(#search-card) {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      :global(#search-card p) {
        max-width: 320px;
      }
      :global(#search-card video) {
        position: absolute;
        right: 0;
        top: 24px;
        height: 430px;
        pointer-events: none;
        max-width: 60%;
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
        background-image: url(/assets/high-contrast.png);
        background-position: -160px 160px;
      }
      @media screen and (max-width: 1300px) {
        :global(#a11y-card) {
          background-image: linear-gradient(to bottom, white, transparent),
            url(/assets/high-contrast.png);
        }
      }
      @media screen and (max-width: 1200px) {
        :global(#highlighting-card) {
          aspect-ratio: auto;
        }
        :global(.feat-darkmode h3) {
          font-size: 4vw;
          font-size: min(48px, max(4vw, 30px));
        }
        :global(#search-card video) {
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
        :global(#search-card) {
          aspect-ratio: 8/3;
        }
        :global(#search-card h3) {
          text-align: left;
        }
        :global(#highlighting-card) {
          background-size: 136%;
        }
        :global(#a11y-card) {
          background-image: url(/assets/high-contrast.png);
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
        :global(#search-card) {
          aspect-ratio: 2.5/2;
          justify-content: flex-start;
          align-items: stretch;
          min-height: 350px;
        }
        :global(#search-card h3) {
          text-align: center;
        }
        :global(#search-card p) {
          max-width: 100%;
        }
        :global(#search-card video) {
          position: relative;
          margin: 0.75em -1.75em 0;
          max-width: calc(100% + 3.5em);
        }
        :global(.dark #search-card video) {
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
            href="/docs/docs-theme/start"
            >
              <Image src={docsCard} alt="Background" loading="eager" />
              <Image src={docsCardDark} alt="Background (Dark)" loading="eager" />
              <h3>
                Define stream processors <br className="show-on-mobile" />
                as Kubernetes resources
              </h3>
          </Feature>
          <Feature index={1} centered href="/docs/guide/image">
            <h3>
              Links and images are <br className="show-on-mobile" />
              always <span className="font-light">optimized</span>
            </h3>
            <p className="text-left mb-8">
              Nextra automatically converts Markdown links and images to use{' '}
              <Link href="https://nextjs.org/docs/routing/introduction#linking-between-pages">
                Next.js Link
              </Link>{' '}
              and{' '}
              <Link href="https://nextjs.org/docs/basic-features/image-optimization#local-images">
                Next.js Image
              </Link>{' '}
              when possible. No slow navigation or layout shift.
            </p>
            <div>
              <div className={styles.optimization}>
                <div style={{ fontSize: '.9rem' }} className="leading-8">
                  <code>[Learn more](/more)</code>
                  <br />
                  <code>![Hero](/hero.png)</code>
                </div>
              </div>
              <ArrowRightIcon
                width="1.2em"
                className="text-neutral-400 rotate-90 my-6 mx-auto"
              />
              <div className={styles.optimization}>
                <div style={{ fontSize: '.9rem' }} className="leading-8">
                  <code>{'<Link .../>'}</code>
                  <br />
                  <code>{'<Image .../>'}</code>
                </div>
              </div>
            </div>
          </Feature>                  
      </Features>
      </div>    
    </div>    
    </div>
)