export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const query = getQuery(event)

    const response = await $fetch(`https://api.gojobs.id/joborder/read?page_size=${query.page_size}&page=${query.page}`, {
      method: 'GET',
      headers: {
        token : "e099wagkd7b10ls164p2si04c",
      }
    })

    return response
})