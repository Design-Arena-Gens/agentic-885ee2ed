import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import styles from '../styles/Home.module.css';

const timeline = [
  { id: 'warm', label: 'Gentle rhythm', duration: 4000 },
  { id: 'adjust-hoodie', label: 'Adjusting her hoodie', duration: 3200 },
  { id: 'hair-tuck', label: 'Brushing a loose strand', duration: 3200 },
  { id: 'deep-breath', label: 'Deep breath and soft smile', duration: 3000 },
  { id: 'watch-check', label: 'Checking her smartwatch', duration: 3200 },
  { id: 'speed-up', label: 'Picking up the pace', duration: 2800 },
  { id: 'close-up', label: 'Close-up confidence', duration: 3000 },
  { id: 'final-slow', label: 'Cooling down with a smile', duration: 3600 }
];

export default function Home() {
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    let timer;

    const schedule = () => {
      const currentDuration = timeline[index].duration;
      timer = setTimeout(() => {
        index = (index + 1) % timeline.length;
        setStageIndex(index);
        schedule();
      }, currentDuration);
    };

    setStageIndex(index);
    schedule();

    return () => clearTimeout(timer);
  }, []);

  const stage = useMemo(() => timeline[stageIndex], [stageIndex]);

  return (
    <>
      <Head>
        <title>Confident Jog in Nature Gym</title>
        <meta
          name="description"
          content="A looping cinematic scene of a confident girl jogging through a nature-themed gym with warm sunlight and graceful motion."
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.shell}>
          <div className={styles.header}>
            <h1>Sunlit Nature Gym</h1>
            <p>Soft motion sequence showcasing focus, warmth, and confident energy.</p>
          </div>

          <div className={styles.sceneShell}>
            <div className={styles.cameraOrbit} data-stage={stage.id}>
              <div className={styles.scene} data-stage={stage.id}>
                <div className={styles.backdrop}>
                  <div className={styles.windowFrame}>
                    <div className={styles.windowGlow} />
                    <div className={styles.foliage}>
                      <span className={`${styles.tree} ${styles.treeFar}`} />
                      <span className={`${styles.tree} ${styles.treeMid}`} />
                      <span className={`${styles.tree} ${styles.treeNear}`} />
                      <span className={styles.lightBeam} />
                    </div>
                  </div>
                  <div className={styles.sunFlares}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className={styles.floor}>
                  <span className={styles.floorGlow} />
                </div>

                <div className={styles.treadmill}>
                  <div className={styles.treadmillBase} />
                  <div className={styles.treadmillRails} />
                  <div className={styles.treadmillBelt} data-stage={stage.id}>
                    <div className={styles.beltPattern} />
                  </div>
                  <div className={`${styles.handle} ${styles.handleLeft}`} />
                  <div className={`${styles.handle} ${styles.handleRight}`} />
                  <div className={styles.console}>
                    <span className={styles.consoleScreen} data-stage={stage.id} />
                    <span className={styles.consoleLight} />
                  </div>
                </div>

                <div className={styles.athlete} data-stage={stage.id}>
                  <div className={styles.shadow} />
                  <div className={styles.ponytail} />
                  <div className={styles.body}>
                    <div className={styles.head}>
                      <div className={styles.hairFront} />
                      <div className={styles.face}>
                        <span className={`${styles.eye} ${styles.eyeLeft}`} />
                        <span className={`${styles.eye} ${styles.eyeRight}`} />
                        <span className={styles.smile} />
                        <span className={styles.blushLeft} />
                        <span className={styles.blushRight} />
                      </div>
                    </div>
                    <div className={styles.hoodie} />
                    <div className={styles.torso} />
                    <div className={`${styles.arm} ${styles.armLeft}`} />
                    <div className={`${styles.arm} ${styles.armRight}`} />
                    <div className={`${styles.hand} ${styles.handLeft}`} />
                    <div className={`${styles.hand} ${styles.handRight}`} />
                    <div className={`${styles.leg} ${styles.legLeft}`} />
                    <div className={`${styles.leg} ${styles.legRight}`} />
                    <div className={`${styles.shoe} ${styles.shoeLeft}`} />
                    <div className={`${styles.shoe} ${styles.shoeRight}`} />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.hud}>
              <div className={styles.caption}>{stage.label}</div>
              <div className={styles.timeline}>
                {timeline.map((item, index) => (
                  <span
                    key={item.id}
                    className={`${styles.timelineDot} ${index === stageIndex ? styles.activeDot : ''}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
