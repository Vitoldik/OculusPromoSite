const $header = $('.header')
const $menu = $header.find('.menu')
const $menuBtn = $header.find('.menu-btn')

$menuBtn.on('click', () => {
    $menu.toggleClass('menu--active')
})