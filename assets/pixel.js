/* Meta Pixel · Gata Do Cupom (ID 1368948485249061) */
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1368948485249061');
fbq('track', 'PageView');

/* Evento "Lead" quando alguém clica num botão que leva ao grupo do WhatsApp */
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a[href*="chat.whatsapp.com"]');
  if (a && window.fbq) fbq('track', 'Lead', { content_name: 'Grupo WhatsApp Gata Do Cupom' });
});
