import Layout from '../components/layout'
import { getProviders, useSession } from 'next-auth/react'
import React from 'react'
import BtnLogin from '../components/BtnLogin'
import Router from 'next/router'



export default function Login({ providers }) {
  const { data: sessiom } = useSession()

  if (sessiom) return (
    Router.push('/'),
    null
  )
  return (
    <Layout>
      <div className="column is-full is-centered">
        <div className="column is-half is-vcentered has-text-centered">
          <h1 className="title is-3">Sign In with Google</h1>
          <h2 className="subtitle">Required to see your personal saved content.</h2>
        </div>
      </div>
      <div className="loginForm column is-narrow">
        <BtnLogin
          provider={providers.google}
        />
      </div>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const providers = await getProviders()
  return {
    props: {
      providers
    },
  }
}

