import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import Seo from '../components/Seo'
import Header from '../components/Header'
import ContentLayout from "../layouts/ContentLayout";
import Image from 'next/image'
import Banner from "../components/Banner";
import { responseAPI } from "../utils/helpers/axios-helper";
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies } from "../utils/api/movies";
import CarouselMovies from "../components/CarouselMovies";
import SkeletonBanner from "../components/Banner/SkeletonBanner";
import Link from 'next/link'

export default function Home({ children, deviceType }) {

  const [dataBanner, setDataBanner] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])

  const fetchBanner = async () => {
    const res = await responseAPI('GET', 'trending/all/day')

    const data = res.data.results

    setDataBanner(data.slice(0, 5))
  }

  const fetchPopularMovies = async () => {
    const res = await getPopularMovies()

    const data = res.data.results

    setPopularMovies(data)

  }

  const fetchNowPlayingMovies = async () => {
    const res = await getNowPlayingMovies()

    const data = res.data.results

    setNowPlayingMovies(data)

  }

  const fetchTopRatedMovies = async () => {
    const res = await getTopRatedMovies()

    const data = res.data.results

    setTopRatedMovies(data)

  }



  useEffect(() => {
    fetchBanner()
    fetchPopularMovies()
    fetchNowPlayingMovies()
    fetchTopRatedMovies()
  }, [])

  return (
    <ContentLayout>
      <Seo title="Home" />

      { dataBanner ? (
        <Banner data={dataBanner}/>
      ) : (
        <SkeletonBanner/>
      ) }
      
      <CarouselMovies
        title="Popular Movies"
        data={popularMovies}
        style={ deviceType.mobile == true ? { margin: '35px 10px' } : { margin: '35px 60px'}}
        type={deviceType}
      />
      <CarouselMovies
        title="Now Playing Movies"
        data={nowPlayingMovies}
        style={ deviceType.mobile == true ? { margin: '35px 10px' } : { margin: '35px 60px'}}
        type={deviceType}
      />
      <CarouselMovies
        title="Top Rated Movies"
        data={topRatedMovies}
        style={ deviceType.mobile == true ? { margin: '35px 10px' } : { margin: '35px 60px'}}
        type={deviceType}
      />
      <Link href={{
        pathname: `/parent/[slug]`,
        query: { slug: '1'}
      }} as={`/parent`}>
        About
      </Link>
    </ContentLayout>
  );
}
