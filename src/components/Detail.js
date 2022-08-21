import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Sheet from "@mui/joy/Sheet";
import ListDivider from "@mui/joy/ListDivider";
import { fontSize } from "@mui/joy/styles/styleFunctionSx";

const Detail = () => {
  const [data, setData] = useState({});
  const location = useLocation();

  useEffect(() => {
    setData(location.state.item);
  }, [data]);

  const detailList = [
    {
      title: "地址",
      key: "Add",
    },
    { title: "營業時間", key: "Opentime" },
    { title: "服務電話", key: "Tel" },
    { title: "介紹", key: "Toldescribe" },
  ];

  return (
    <Sheet
      sx={{
        m: 2,
        display: { xs: "none", sm: "flex" },
      }}
    >
      <AspectRatio sx={{ minHeight: "500px", minWidth: "50vw" }}>
        <img alt="" src={data.Picture1} />
      </AspectRatio>
      <Box
        sx={{
          gap: 2,
          p: 2,
          gridTemplateColumns: "auto 1fr",
          maxWidth: "50vw",
        }}
      >
        <Typography level="h2" mr={1}>
          {data.Name}
        </Typography>
        <Typography level="body3" sx={{ fontSize: 14 }} textColor="grey">
          {data.Description}
        </Typography>
        <ListDivider component="hr" />
        <Box
          sx={{
            gap: 2,
            p: 2,
            display: "grid",
            fontSize: "12px",
            gridTemplateColumns: "auto 1fr",
            "& > *:nth-child(odd)": { color: "text.secondary" },
          }}
        >
          {detailList.map((item) => {
            return (
              <>
                <Typography level="body2">{item.title}</Typography>
                <Typography level="body2" textColor="text.primary">
                  {data[item.key]}
                </Typography>
              </>
            );
          })}
          <ListDivider component="hr" />
        </Box>
      </Box>
    </Sheet>
  );
};

export default Detail;
