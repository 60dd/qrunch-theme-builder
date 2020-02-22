<template lang="pug">
  // ヘッダー
  header.main-header
    .main-header__inner
      h1.main-header__blog-title
        a.main-header__blog-title-link(href="/") Blog Title
      h2.main-header__blog-description Blog Description
      nav.main-header__navigation
        ul.main-header__navigation-items
          li.main-header__navigation-item.main-header__navigation-item--current
            a.main-header__navigation-item-link(href="/") トップ
          li.main-header__navigation-item
            a.main-header__navigation-item-link(href="/entries") 記事一覧
          li.main-header__navigation-item
            a.main-header__navigation-item-link(href="/logs") ログ一覧
</template>
