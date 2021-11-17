import React from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'

const iconObject = {
  google: faGoogle,
  twitter: faTwitter,
  github: faGithub,
  facebook: faFacebook
}

const BtnLogin = ({ provider }) => {
  const brandName = `${provider.name.toLowerCase()}`
  const router = useRouter()
  return (
    <button className="button is-link is-medium" onClick={() => signIn(provider.id, { callbackUrl: provider.callbackUrl })}>
      <span>
        <FontAwesomeIcon icon={iconObject[brandName]} className="menu-list brandIcon" />
           {provider.name}
        </span>
    </button>
  )
}

BtnLogin.defaultProps = {
  txtColor: '#eee'
}
export default BtnLogin
