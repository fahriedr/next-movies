import React, {useEffect, useState} from 'react'
import ContentLayout from '../../../layouts/ContentLayout'
import Banner from '../../../components/Banner'
import { useRouter } from 'next/router'
import { getMovieDetail } from '../../../utils/api/movies'

const MovieDetail = ({res}) => {

    const router = useRouter()

    const [data, setData] = useState()

    const fetchData = async () => {
        if(router.isReady){
            const res = await getMovieDetail(router.query.id)

            setData(res.data)
        }
    }

    useEffect(() => {
        fetchData()
    }, [router])

    return (
        <ContentLayout>
            { data && (
                <Banner data={data}/>
            ) }
        </ContentLayout>
    )
}

// export const getServerSideProps = async (context) => {
//     const {id} = await context.params

//     const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
//     const data = res.json()


//     return {
//         props: {
//             res
//         }
//     }
// }

export default MovieDetail
