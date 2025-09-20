import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const getContactUs = createAsyncThunk(
  "common/getContactUs",
  async () => {
    const result = await axios.get(
      `${API_BASE_URL}/get-contactus`
    );
    return result.data;
  }
);

export const getCharities = createAsyncThunk(
  "common/getCharities",
  async () => {
    const result = await axios.get(
      `${API_BASE_URL}/get-charities`
    );

    return result?.data;
  }
);

export const getAboutUs = createAsyncThunk("common/getAboutUs", async () => {
  const result = await axios.get(
    `${API_BASE_URL}/get-aboutus`
  );
  return result.data;
});

export const getVlogs = createAsyncThunk("common/getVlogs", async ({
  page = 1,
  limit = 10,
}: {
  page?: number;
  limit?: number;
}) => {
  const result = await axios.get(`${API_BASE_URL}/get-vlogs?page=${page}&limit=${limit}`);
  return result.data;
});

export const getVlogDetail = createAsyncThunk<PayloadAction, any>(
  "common/getVlogDetail",
  async (vlog_id) => {
    const result = await axios.post(
      `${API_BASE_URL}/get-vlog-details?vlog_id=${vlog_id}`
    );
    return result.data;
  }
);

export const getBaseSetup = createAsyncThunk(
  "common/getBaseSetup",
  async () => {
    const result = await axios.get(
      `${API_BASE_URL}/get-base-setup`
    );

    return result?.data;
  }
);

export const getNews = createAsyncThunk("common/getNews",
  async ({
    page = 1,
    limit = 10,
  }: {
    page?: number;
    limit?: number;
  }) => {
  const result = await axios.get(`${API_BASE_URL}/get-news?page=${page}&limit=${limit}`);
  return result.data;
});

export const getRecommendBlogs = createAsyncThunk("common/getRecommendBlogs", async ({blog_id}: any) => {
  const result = await axios.get(`${API_BASE_URL}/get-blogs?except_blog_id=${blog_id}`);
  return result.data;
});

export const getNewDetail = createAsyncThunk<PayloadAction, any>(
  "common/getNewDetail",
  async (new_id) => {
    const result = await axios.post(
      `${API_BASE_URL}/get-new-details?new_id=${new_id}`
    );
    return result.data;
  }
);

export const getTerms = createAsyncThunk("common/getTerms", async () => {
  const result = await axios.get(`${API_BASE_URL}/get-terms`);
  return result.data;
});

export const getFAQs = createAsyncThunk("common/getFAQs", async () => {
  const result = await axios.get(`${API_BASE_URL}/get-faqs`);
  return result.data;
});

export const sendInquiry = createAsyncThunk<PayloadAction, any>(
  "common/sendInquiry",
  async (payload) => {
    const result = await axios.post(
      `${API_BASE_URL}/send-contact-message`,
      { ...payload }
    );
    return result.data;
  }
);


interface CommonState {
  charities: [];
  baseSetup: any;
  contactUs: object;
  aboutUs: object;
  news: [];
  totalBlogs: number;
  recommendBlogs: [];
  blogDetail: object;
  vlogs: [];
  totalVlogs: number;
  vlogDetail: object;
  faqs: object;
  terms: object;
  loading: boolean;
  error: boolean;
}

const initialState: CommonState = {
  charities: [],
  baseSetup: {},
  contactUs: {},
  aboutUs: {},
  news: [],
  totalBlogs: 0,
  recommendBlogs: [],
  blogDetail: {},
  vlogs: [],
  totalVlogs: 0,
  vlogDetail: {},
  faqs: {},
  terms: {},
  loading: false,
  error: false,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharities.fulfilled, (state, action: any) => {
      state.charities = action.payload.data.charities;
      state.loading = false;
    });
    builder.addCase(getCharities.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getCharities.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(getBaseSetup.fulfilled, (state, action: any) => {
      state.baseSetup = action.payload.data;
      state.loading = false;
    });
    builder.addCase(getBaseSetup.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getBaseSetup.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(getContactUs.fulfilled, (state, action: any) => {
      state.contactUs = action.payload.data.contact_us;
      state.loading = false;
    });
    builder.addCase(getContactUs.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getContactUs.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(getAboutUs.fulfilled, (state, action: any) => {
      state.aboutUs = action.payload.data.about_us;
      state.loading = false;
    });
    builder.addCase(getAboutUs.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getAboutUs.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(getNews.fulfilled, (state, action: any) => {
      state.news = action.payload.data.news;
      state.totalBlogs = action.payload.data.total;
      state.loading = false;
    });
    builder.addCase(getNews.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getNews.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(getRecommendBlogs.fulfilled, (state, action: any) => {
      state.recommendBlogs = action.payload.data.news;
      state.loading = false;
    });
    builder.addCase(getRecommendBlogs.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getRecommendBlogs.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(getNewDetail.fulfilled, (state, action: any) => {
      state.blogDetail = action.payload.data.blog;
      state.loading = false;
    });
    builder.addCase(getNewDetail.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getNewDetail.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(getVlogs.fulfilled, (state, action: any) => {
      state.vlogs = action.payload.data.vlogs;
      state.totalVlogs = action.payload.data.total;
      state.loading = false;
    });
    builder.addCase(getVlogs.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getVlogs.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(getVlogDetail.fulfilled, (state, action: any) => {
      state.vlogDetail = action.payload.data.vlog;
      state.loading = false;
    });
    builder.addCase(getVlogDetail.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getVlogDetail.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(getFAQs.fulfilled, (state, action: any) => {
      state.faqs = action.payload.data.faqs;
      state.loading = false;
    });
    builder.addCase(getFAQs.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getFAQs.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(getTerms.fulfilled, (state, action: any) => {
      state.terms = action.payload.data.terms;
      state.loading = false;
    });
    builder.addCase(getTerms.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getTerms.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default commonSlice.reducer;
