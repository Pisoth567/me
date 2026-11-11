# Featured project review

Reviewed 2026-11-11. The shared `projects` collection in `content.ts` drives the listing, dynamic details, and featured cards. Featured selection is explicitly limited to two slugs.

## ICHECK

- Repository: https://github.com/fullstack-gen2/icheck
- Reviewed tree: `5c3c3fb5b531f9b95e36e4693444855181b41493`
- `package.json` confirms Next.js and React. Java, Spring Boot, PostgreSQL, and the ISTAD team-project context come from the user's previously verified project review.
- Existing route retained: `/projects/icheck-smart-attendance`.
- Supplied public URL https://icheck.today/ returned HTTP 402 during review. Retained as requested; working deployment availability cannot be confirmed.

## Generate Description AI

- Repository: https://github.com/Pisoth567/generate-description-ai
- Reviewed commit: `c685c2a7a1e517a84820a2fb31832be0b2a20bba`
- `frontend/package.json` and `.tsx` sources: Next.js, React, TypeScript.
- `backend/requirements.txt`: FastAPI, Python dependencies, PostgreSQL driver, SQLAlchemy, OpenAI SDK.
- `backend/app/services/ai_service.py`: OpenAI Responses API, English and Khmer instructions, selectable tone. Model comes from configuration; no model name is asserted.
- `backend/app/services/generation_service.py`: saved generation history and user-scoped access.
- `frontend/components/generator.tsx`: product input form, language/tone selection, copy result.
- Reviewed backend configuration and both `.env.example` files: provider and model are configured server-side; PostgreSQL database URL.
- `STAGING_DEPLOYMENT.md` and `render.yaml` describe deployment preparation with placeholder hostnames. No verified deployment URL was found, so no Live Demo link is shown.
- README still describes an earlier mock implementation; current source takes precedence.

## Images

No genuine project screenshots were found in the portfolio or either reviewed repository. ICHECK's public deployment could not supply a screenshot. ICHECK retains its accessible, explicitly labeled 16:9 illustration. Generate Description AI now uses the actual homepage screenshot supplied by the user, stored unchanged at `public/images/projects/generate-description-ai.png`. It is rendered with object-contain to preserve the full interface and original aspect ratio. No stock or generated screenshot assets are used.

The AI project frontend package manifest and backend requirements were rechecked for the screenshot/content update; existing technology badges remain unchanged.
