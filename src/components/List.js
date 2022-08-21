import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const List = () => {
  const navigate = useNavigate();

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c"
    )
      .then((res) => res.json())
      .then((result) => {
        let newData = result.data.XML_Head.Infos.Info;
        newData = newData.sort((a, b) => {
          return a.Add > b.Add ? 1 : -1;
        });
        setList(newData);
      });
  }, []);
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 2,
        mt: 2,
      }}
    >
      {list.map((item) => {
        return (
          <Card
            key={item.Id}
            row
            sx={{
              minHeight: "280px",
              gap: 2,
            }}
            onClick={(e) => {
              navigate(`/places/${item.Id}`, { state: { item } });
            }}
          >
            <CardCover>
              <img src={item.Picture1} />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent sx={{ justifyContent: "flex-end" }}>
              <Typography
                level="h2"
                fontSize="lg"
                textColor="#fff"
                mb={1}
                sx={{ fontSize: "16px" }}
              >
                {item.Name}
              </Typography>
              <Typography
                level="body3"
                mt={0.5}
                startDecorator={<LocationOnIcon />}
                textColor="rgba(255,255,255,0.72)"
                sx={{ fontSize: "14px" }}
              >
                {item.Add}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default List;
