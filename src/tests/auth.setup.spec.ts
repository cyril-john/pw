import { test as setup } from '@playwright/test'
import { request } from 'http'

setup('api last try', async ({request})=>{
    const requestuser = await request.get('https://reqres.in/api/users/2')

    const responseUser = await requestuser.json()

    console.log(responseUser)
})