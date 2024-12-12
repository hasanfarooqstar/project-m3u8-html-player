module.exports = {
  async headers() {
    return [
      {
        source: '/master.m3u8',
        headers: [
          { key: 'Content-Type', value: 'application/vnd.apple.mpegurl' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
      {
        source: '/(.*).ts',
        headers: [
          { key: 'Content-Type', value: 'video/mp2t' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
    ];
  },
};
