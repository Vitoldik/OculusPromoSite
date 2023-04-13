'use strict'

const $tabBtn = $('.tabs .tabs__btn-item')
const $tabContent = $('.tabs .tabs__content-item')

const btnActiveClass = 'tabs__btn-item--active'
const tabActiveClass = 'tabs__content-item--active'

$tabBtn.on('click', ({currentTarget}) => {
    const $btn = $(currentTarget)
    const $content = $tabContent.closest($(`#${$btn.data('button')}`))

    if (!$content.length)
        return

    $tabBtn.closest(`.${btnActiveClass}`)
        .removeClass(btnActiveClass)
    $tabContent.closest(`.${tabActiveClass}`)
        .removeClass(tabActiveClass)

    $btn.addClass(btnActiveClass)
    $content.addClass(tabActiveClass)
})