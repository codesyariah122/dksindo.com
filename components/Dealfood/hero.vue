<template>
	<div class="hero_area">
    <!-- header section strats -->
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="/">
            <span>
              Delfood
            </span>
          </a>
          <div class="" id="">
            <div class="User_option">
              <a href="">
                <i class="fa fa-user" aria-hidden="true"></i>
                <span>Login</span>
              </a>
              <form class="form-inline ">
                <input type="search" placeholder="Search" />
                <button class="btn  nav_search-btn" type="submit">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            <div class="custom_menu-btn">
              <button onclick="openNav()">
              	<img src="/dealfood/images/menu.png" alt="">
              </button>
            </div>
            <div id="myNav" class="overlay">
              <div class="overlay-content">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Blog</a>
                <a href="/">Testimonial</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <!-- end header section -->

    <!-- slider section -->
    <section class="slider_section ">
      <div class="container ">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="detail-box">
              <h1>
                Discover Restuarant And Food
              </h1>
              <p>
                when looking at its layout. The point of using Lorem Ipsum
              </p>
            </div>
            <div class="find_container ">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <form>
                      <div class="form-row ">
                        <div class="form-group col-lg-5">
                          <input type="text" class="form-control" id="inputHotel" placeholder="Restaurant Name">
                        </div>
                        <div class="form-group col-lg-3">
                          <input type="text" class="form-control" id="inputLocation" placeholder="All Locations">
                          <span class="location_icon">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                          </span>
                        </div>
                        <div class="form-group col-lg-3">
                          <div class="btn-box">
                            <button type="submit" class="btn ">Search</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slider_container">
        <div class="item">
          <div class="img-box">
            <img src="/dealfood/images/slider-img1.png" alt="" />
          </div>
        </div>
        <div class="item">
          <div class="img-box">
            <img src="/dealfood/images/slider-img2.png" alt="" />
          </div>
        </div>
        <div class="item">
          <div class="img-box">
            <img src="/dealfood/images/slider-img3.png" alt="" />
          </div>
        </div>
        <div class="item">
          <div class="img-box">
            <img src="/dealfood/images/slider-img4.png" alt="" />
          </div>
        </div>
        <div class="item">
          <div class="img-box">
            <img src="/dealfood/images/slider-img1.png" alt="" />
          </div>
        </div>
        <div class="item">
          <div class="img-box">
            <img src="/dealfood/images/slider-img2.png" alt="" />
          </div>
        </div>
        <div class="item">
          <div class="img-box">
            <img src="/dealfood/images/slider-img3.png" alt="" />
          </div>
        </div>
        <div class="item">
          <div class="img-box">
            <img src="/dealfood/images/slider-img4.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- end slider section -->
  </div>
</template>