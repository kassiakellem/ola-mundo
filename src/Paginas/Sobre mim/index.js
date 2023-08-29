import PostModelo from "Componente/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim.jpg";
import styles from "./SobreMim.module.css";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou a Kássia!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto da kássia séria"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Velit euismod in
        pellentesque massa placerat duis ultricies lacus sed. Scelerisque eu
        ultrices vitae auctor eu augue ut lectus arcu. Molestie ac feugiat sed
        lectus vestibulum mattis ullamcorper velit. Ipsum a arcu cursus vitae
        congue mauris rhoncus aenean vel. Massa eget egestas purus viverra
        accumsan in nisl. Praesent tristique magna sit amet purus gravida quis
        blandit. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.
        Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit
        ullamcorper. A iaculis at erat pellentesque adipiscing commodo elit.
        Purus semper eget duis at tellus at urna.
      </p>
      <p className={styles.paragrafo}>
        Sed euismod nisi porta lorem mollis aliquam ut porttitor. Nibh mauris
        cursus mattis molestie a iaculis at. Turpis cursus in hac habitasse
        platea dictumst quisque. Consequat semper viverra nam libero. Fringilla
        urna porttitor rhoncus dolor purus non enim. Quis eleifend quam
        adipiscing vitae proin sagittis nisl rhoncus. Sed viverra ipsum nunc
        aliquet bibendum enim facilisis gravida neque. Id diam vel quam
        elementum pulvinar etiam. Viverra adipiscing at in tellus. Lorem dolor
        sed viverra ipsum nunc aliquet bibendum enim. Urna nec tincidunt
        praesent semper feugiat nibh sed pulvinar proin.
      </p>
      <p className={styles.paragrafo}>
        At urna condimentum mattis pellentesque id nibh. Tortor posuere ac ut
        consequat. Sodales ut etiam sit amet nisl purus. Tincidunt augue
        interdum velit euismod in pellentesque massa. At varius vel pharetra vel
        turpis nunc eget lorem. Id eu nisl nunc mi ipsum faucibus. In arcu
        cursus euismod quis viverra nibh. Turpis egestas maecenas pharetra
        convallis posuere morbi leo. Orci a scelerisque purus semper eget duis
        at. Aliquet nibh praesent tristique magna sit amet. Sit amet justo donec
        enim diam vulputate ut pharetra. Morbi tincidunt ornare massa eget
        egestas purus. Scelerisque in dictum non consectetur a erat. Gravida
        dictum fusce ut placerat orci nulla pellentesque. Nec nam aliquam sem et
        tortor consequat id porta nibh.
      </p>
      <p className={styles.paragrafo}>
        Faucibus in ornare quam viverra orci sagittis eu. Urna nec tincidunt
        praesent semper feugiat nibh sed pulvinar. Sit amet risus nullam eget
        felis eget. Vitae suscipit tellus mauris a diam maecenas sed enim ut.
        Nisl suscipit adipiscing bibendum est. Suspendisse sed nisi lacus sed. A
        erat nam at lectus. Lorem mollis aliquam ut porttitor leo. Laoreet id
        donec ultrices tincidunt arcu non. Sit amet porttitor eget dolor morbi
        non arcu risus quis. Ut etiam sit amet nisl purus in.
      </p>
      <p className={styles.paragrafo}>
        Volutpat commodo sed egestas egestas fringilla phasellus faucibus
        scelerisque eleifend. Lorem dolor sed viverra ipsum nunc aliquet
        bibendum enim facilisis. Non arcu risus quis varius quam quisque id diam
        vel. Aenean pharetra magna ac placerat vestibulum. Lacus sed turpis
        tincidunt id aliquet risus feugiat. Facilisi etiam dignissim diam quis
        enim. Nibh sed pulvinar proin gravida hendrerit lectus. Senectus et
        netus et malesuada fames ac turpis. Nulla facilisi etiam dignissim diam
        quis. Sem nulla pharetra diam sit.
      </p>
    </PostModelo>
  );
}
