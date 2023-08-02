const widgetWrapper = document.createElement('div');
widgetWrapper.classList.add('widget_wrapper');

const widgetIcon = document.createElement('div');
widgetIcon.classList.add('widget_icon');

widgetWrapper.appendChild(widgetIcon);
document.body.appendChild(widgetWrapper);

widgetWrapper.addEventListener('click', () => {
  console.log('ok');
});
