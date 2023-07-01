router.get("/photos", (request, response) => {
  const protocol = request.protocol;
  const host = request.hostname;
  const port = process.env.PORT || 8001;
  const serverUrl = `${protocol}://${host}:${port}`;
  db.query(`
    SELECT 
    json_agg(
        json_build_object(
          'id', photo.id,
          'urls', json_build_object(
            'full', concat('${serverUrl}/images/', photo.full_url),
            'regular', concat('${serverUrl}/images/', photo.regular_url)
          ),
          'user', json_build_object(
            'username', user_account.username,
            'name', user_account.fullname,
            'profile', concat('${serverUrl}/images/', user_account.profile_url)
          ),
          'location', json_build_object(
            'city', photo.city,
            'country', photo.country