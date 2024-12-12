module.exports = {
    async headers() {
      return [
        {
          source: '/master.m3u8',
          headers: [
            { key: 'Access-Control-Allow-Origin', value: '*' },
            { key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS' },
            { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
          ],
        },
      ];
    },
  };
  