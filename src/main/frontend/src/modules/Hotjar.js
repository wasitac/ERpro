const Hotjar = () => {
  return (
    <>
      {/* <!-- Hotjar Tracking Code for https://m.site.naver.com/1iTy0 --> */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:3859192,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `,
        }}
      />
    </>
  );
};

export default Hotjar;
