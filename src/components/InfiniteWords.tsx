import InfiniteScroll from "react-infinite-scroll-component";
import getWords from "../utils/GetWordsInfiniteScroll";
import {Box, Grid} from "@mui/material";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function InfiniteWords() {
  const [data, setData] = useState<any>([]);
  const [lastKey, setLastKey] = useState<any>(null);

  useEffect(() => {
    getWords.postsFirstBatch().then((res: any) => {
      setData(res.words)
      setLastKey(res.lastKey)
    })
  }, [])

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={() => {
        getWords.postsNextBatch(lastKey).then((res: any) => {
          setData((prev: any) => [...prev, ...res.words])
          setLastKey(res.lastKey)
        })
      }}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <Box width={'600px'}>
        <Grid container spacing={3}>
          {data.map((item: any, index: any) => {
              return (
                <Grid item xs={4} key={index}>
                  <Link to={`/dictionary/${item[0]}`}>
                    {item[0]}
                  </Link>
                </Grid>
              )
            }
          )}
        </Grid>
      </Box>
    </InfiniteScroll>
  )
}