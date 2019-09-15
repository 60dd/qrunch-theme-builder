<template>
  <!-- ### サブコンテント（サイドバー） ### -->
  <div class="content-box__sub-content">
      <aside class="sub-content">
          <div class="sub-content__inner">
              <!-- ### ブログ内検索 ### -->
              <div class="sub-content__side-mudules">
                  <div class="side-mudule side-search-module">
                      <h3 class="side-module__title">検索</h3>
                      <div class="side-module__content">
                          <form class="side-module__form" method="get" action="/search">
                              <input type="search" class="side-module__input" placeholder="ブログ内を検索..." name="q" value="" />
                          </form>
                      </div>
                  </div>
              </div>
              <!-- ### プロフィール ### -->
              <div class="sub-content__side-mudules">
                  <div class="side-mudule side-search-module">
                      <h3 class="side-module__title">プロフィール</h3>
                      <div class="side-module__content">
                          <a href="#" target="_blank" class="side-module__profile-icon-link">
                              <img src="#" class="side-module__profile-icon" />
                          </a>
                          <div class="side-module__profile-name">
                              <a href="#" target="_blank" class="side-module__profile-name-link">User Name</a>
                          </div>
                          <div class="side-module__profile-id">@User Screen Name</div>
                          <div class="side-module__profile-description">Profile Description</div>
                      </div>
                  </div>
              </div>
              <!-- ### 記事カテゴリー ### -->
              <div class="sub-content__side-mudules">
                  <div class="side-mudule side-category-module">
                      <h3 class="side-module__title">カテゴリー</h3>
                      <div class="side-module__content">
                          <ul class="side-module__categories">
                              <li class="side-module__category-item">
                                  <a href="#" class="side-module__category-item-link">
                                      <span class="side-module__category-item-month">Category Name</span>
                                      <span class="side-module__category-item-count">（Category Count）</span>
                                  </a>
                              </li>
                          </ul>
                          <!-- ### 表示するデータがない場合 ### -->
                          <div class="side-module__no-content">
                              <span>データなし</span>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- ### 記事タグ ### -->
              <div class="sub-content__side-mudules">
                  <div class="side-mudule side-tag-module">
                      <h3 class="side-module__title">カテゴリー</h3>
                      <div class="side-module__content">
                          <ul class="side-module__tags">
                              <li class="side-module__tag-item">
                                  <a href="#" class="side-module__tag-item-link">Tag Name</a>
                              </li>
                          </ul>
                          <!-- ### 表示するデータがない場合 ### -->
                          <div class="side-module__no-content">
                              <span>データなし</span>
                          </div>
                      </div>
                  </div>
              </div> 
              <!-- ### 月別アーカイブ ### -->
              <div class="sub-content__side-mudules">
                  <div class="side-mudule side-monthly-archive-module">
                      <h3 class="side-module__title">月別アーカイブ</h3>
                      <div class="side-module__content">
                          <ul class="side-module__monthly-archives">
                              <li class="side-module__monthly-archive-item">
                                  <a href="#" class="side-module__monthly-archive-item-link">
                                      <span class="side-module__monthly-archive-item-month">Archive Year-Archive Month</span>
                                      <span class="side-module__monthly-archive-item-count">(Archive Count)</span>
                                  </a>
                              </li>
                          </ul>
                          <!-- ### 表示するデータがない場合 ### -->
                          <div class="side-module__no-content">
                              <span>データなし</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </aside>
  </div>
</template>
