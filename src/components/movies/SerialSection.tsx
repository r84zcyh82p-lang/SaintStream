import { episodes } from "../../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { styles } from "../../styles/styles";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FormControl, MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";

export default function SerialSection() {
  const [season, setSeason] = React.useState('');
  const [showShadow, setShowShadow] = useState(true);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSeason(event.target.value as string);
  };

  const handleSlideChange = () => {
    setShowShadow(false);
    setTimeout(() => setShowShadow(true), 300);
  };
  return (
    <div className={` ${styles.container} py-10`}>
      <div className="flex justify-between items-center gap-4 mb-6">
        <h3 className="font-bold text-[24px] leading-8 tracking-[.5%] text-[#F9F9F9]">1-9 Episode</h3>
        <Box>
          <FormControl>
            <Select
              displayEmpty
              className="rounded-lg w-27.75 h-7.5"
              sx={{
                color: '#FFFFFF',
                width: '111px',
                height: '30px',
                borderRadius: '8px',
                backgroundColor: '#0D0C0F',
                border: '1px solid #28262D',
                '&:hover': { borderColor: '#28262D' },
                '.MuiSelect-select': {
                  display: 'flex',
                  alignItems: 'center',
                  height: '30px',
                  padding: '0 12px',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '22px',
                  letterSpacing: '0.5%'
                },
                '.MuiSvgIcon-root': { color: '#fff' },
                '&.Mui-focused': { borderColor: '#28262D' }
              }}
              id="demo-simple-select"
              value={season}
              onChange={handleChange}
              MenuProps={{ PaperProps: { sx: { bgcolor: '#0D0C0F', color: 'black' } } } as any}
              renderValue={(selected) => selected || 'Season 1'}
            >
              <MenuItem value={"Season 1"} sx={{ color: 'black', '&.Mui-selected': { color: 'black' } }}>Season 1</MenuItem>
              <MenuItem value={"Season 2"} sx={{ color: 'black', '&.Mui-selected': { color: 'black' } }}>Season 2</MenuItem>
              <MenuItem value={"Season 3"} sx={{ color: 'black', '&.Mui-selected': { color: 'black' } }}>Season 3</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="relative -mx-8 px-8 overflow-visible">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full" slidesPerView="auto" spaceBetween={24} onSlideChange={handleSlideChange}>
          <SwiperSlide style={{ width: "auto" }}>
            <div className="flex gap-4 items-center">
              {
                episodes.map((item, index) => (
                  <div key={index} className="shrink-0 flex flex-col gap-y-3 items-center cursor-pointer relative overflow-hidden rounded-2xl w-75.25 h-49.25">
                    <img src={item.img} alt={item.title} className="rounded-2xl w-full h-full object-cover" />
                    <div className="flex flex-col items-center absolute bottom-0 left-0 py-2 px-5 w-full" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 78.02%)" }}>
                      <h3 className="text-[#F9F9F9] font-bold w-full text-[16px] tracking-[0.5%] leading-6">{item.title}</h3>
                      <p className="text-[#78828A] tracking-[0.5%] ml-1 text-[12px] leading-5">{item.description}</p>
                      <div className="w-full flex items-center justify-between">
                        <h5 className="text-[#D1D8DD] font-medium text-[12px] leading-5 tracking-[0.5%] whitespace-nowrap">{item.duration}</h5>
                        <Box sx={{ width: 139 }}>
                          <Slider
                            color="success"
                            size="small"
                            defaultValue={50}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                          />
                        </Box>
                        <h5 className="text-[#D1D8DD] font-medium text-[12px] leading-5 tracking-[0.5%] whitespace-nowrap">{item.duration}</h5>
                      </div>
                    </div>
                    <div className="">
                    </div>
                  </div>
                ))
              }
            </div>
          </SwiperSlide>
          <div className={`absolute right-0 bottom-0 z-10 w-41.75 h-64 top_cast_shadow_bg transition-opacity duration-300 ${showShadow ? 'opacity-100' : 'opacity-0'}`}></div>
        </Swiper>
      </div>
    </div>
  )
}
